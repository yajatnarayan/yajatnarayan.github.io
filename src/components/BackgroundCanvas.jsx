import { useReducedMotion } from '../hooks/useReducedMotion'

export function BackgroundCanvas() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="bg-canvas" aria-hidden="true">
      {!prefersReducedMotion && (
        <>
          <div className="orb orb--a" />
          <div className="orb orb--b" />
          <div className="orb orb--c" />
        </>
      )}
      <div className="grid-veil" />
    </div>
  )
}
