import { useCursor } from '@/hooks/useCursor'

export default function Cursor() {
  const { pos, hovering } = useCursor()

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div
      className={`cursor ${hovering ? 'cursor--hover' : ''}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  )
}
