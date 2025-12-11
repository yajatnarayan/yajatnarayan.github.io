import { useEffect, useState, useRef } from 'react'

export function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')
  const observerRef = useRef(null)
  const rafRef = useRef(null)

  const {
    threshold = [0.15, 0.3, 0.5, 0.65],
    rootMargin = '0px 0px -40% 0px',
  } = options

  useEffect(() => {
    // Get all section elements
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    // Store all entries to track visibility
    const entriesMap = new Map()

    const findMostVisibleSection = () => {
      // Get all currently intersecting entries
      const intersecting = Array.from(entriesMap.values()).filter(
        (entry) => entry.isIntersecting
      )

      if (intersecting.length === 0) {
        // No sections intersecting - find which section we're closest to
        const allEntries = Array.from(entriesMap.values())
        if (allEntries.length === 0) return

        // Check if we're at the top of the page
        const firstEntry = allEntries[0]
        if (firstEntry && firstEntry.boundingClientRect.top > 0) {
          return sectionIds[0] // Return first section when at top
        }

        // Otherwise, keep the last active section
        return
      }

      // Sort by intersection ratio (descending), then by position
      const sorted = intersecting.sort((a, b) => {
        // Primary: highest intersection ratio wins
        const ratioDiff = b.intersectionRatio - a.intersectionRatio
        if (Math.abs(ratioDiff) > 0.01) {
          return ratioDiff
        }

        // Tie-breaker: prefer section closest to top of viewport
        // For sections near the top of viewport, this will be the one with smallest positive top
        // For sections filling the viewport, this ensures consistent ordering
        const aTop = a.boundingClientRect.top
        const bTop = b.boundingClientRect.top

        // If one section's top is above viewport and one is in viewport,
        // prefer the one in viewport
        if (aTop < 0 && bTop >= 0) return 1
        if (bTop < 0 && aTop >= 0) return -1

        // Both above or both in viewport: prefer the one higher up (smaller top value)
        return aTop - bTop
      })

      return sorted[0].target.id
    }

    const handleIntersection = (entries) => {
      // Cancel any pending RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Update entries map with latest intersection data
      entries.forEach((entry) => {
        entriesMap.set(entry.target.id, entry)
      })

      // Use RAF to debounce rapid updates
      rafRef.current = requestAnimationFrame(() => {
        const newActiveId = findMostVisibleSection()
        if (newActiveId) {
          setActiveId(newActiveId)
        }
      })
    }

    // Create observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    // Observe all sections
    sections.forEach((section) => {
      observerRef.current.observe(section)
    })

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      entriesMap.clear()
    }
  }, [sectionIds, threshold, rootMargin])

  return activeId
}
