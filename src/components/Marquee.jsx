import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Marquee({ items }) {
  const [marqueeOffset, setMarqueeOffset] = useState(0)
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const marqueeRef = useRef(null)
  const dragState = useRef({ startX: 0, startOffset: 0, lastX: 0, lastTime: 0 })
  const velocityRef = useRef(0)
  const rafRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const measure = () => {
      if (marqueeRef.current) {
        setMarqueeWidth(marqueeRef.current.scrollWidth / 2)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [items])

  useEffect(() => {
    if (prefersReducedMotion || isDragging || isPaused) return

    let animationId
    let lastTime = performance.now()
    const speed = 30

    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000
      lastTime = currentTime

      setMarqueeOffset((prev) => {
        const newOffset = prev - speed * delta
        return marqueeWidth ? newOffset % marqueeWidth : newOffset
      })

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [marqueeWidth, isDragging, isPaused, prefersReducedMotion])

  const normalizeOffset = (value) => {
    if (!marqueeWidth) return value
    let x = value % marqueeWidth
    if (x > 0) x -= marqueeWidth
    return x
  }

  const startDrag = (event) => {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    dragState.current = {
      startX: clientX,
      startOffset: marqueeOffset,
      lastX: clientX,
      lastTime: performance.now(),
    }
    setIsDragging(true)
  }

  const onDrag = (event) => {
    if (!isDragging) return
    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    const now = performance.now()
    const delta = clientX - dragState.current.startX
    const frameDelta = clientX - dragState.current.lastX
    const dt = now - dragState.current.lastTime

    setMarqueeOffset(normalizeOffset(dragState.current.startOffset + delta))

    if (dt > 0) {
      velocityRef.current = (frameDelta / dt) * 1000
    }
    dragState.current.lastX = clientX
    dragState.current.lastTime = now
  }

  const endDrag = () => {
    if (!isDragging) return
    setIsDragging(false)

    const decay = 0.94
    const threshold = 10
    let last = performance.now()

    const step = (now) => {
      const dt = (now - last) / 1000
      last = now
      setMarqueeOffset((prev) => normalizeOffset(prev + velocityRef.current * dt))
      velocityRef.current *= decay

      if (Math.abs(velocityRef.current) < threshold) {
        rafRef.current = null
        return
      }
      rafRef.current = requestAnimationFrame(step)
    }

    if (Math.abs(velocityRef.current) >= threshold) {
      rafRef.current = requestAnimationFrame(step)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setMarqueeOffset((prev) => normalizeOffset(prev + 100))
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      setMarqueeOffset((prev) => normalizeOffset(prev - 100))
    } else if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      setIsPaused((p) => !p)
    }
  }

  return (
    <div
      className="marquee"
      aria-label="Skills and certifications marquee"
      role="region"
      tabIndex="0"
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={startDrag}
      onTouchMove={onDrag}
      onTouchEnd={endDrag}
      onKeyDown={handleKeyDown}
      aria-live="polite"
      aria-atomic="false"
    >
      <div
        className="marquee__track marquee__track--draggable"
        ref={marqueeRef}
        style={{ transform: `translateX(${marqueeOffset}px)` }}
      >
        {items.concat(items).map((item, index) => (
          <a
            key={`${item.label}-${index}`}
            className="marquee__item"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex="-1"
          >
            {item.label}
          </a>
        ))}
      </div>
      <p className="sr-only">
        Use arrow keys to scroll, space or enter to pause. Drag with mouse or touch to navigate.
      </p>
    </div>
  )
}
