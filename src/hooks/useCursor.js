import { useState, useEffect, useCallback } from 'react'

/**
 * Tracks mouse position and returns { x, y, hovering }.
 * Call the returned `ref` callback on elements that should
 * trigger the hover state.
 */
export function useCursor() {
  const [pos, setPos]         = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const onMouseEnter = useCallback(() => setHovering(true),  [])
  const onMouseLeave = useCallback(() => setHovering(false), [])

  return { pos, hovering, onMouseEnter, onMouseLeave }
}
