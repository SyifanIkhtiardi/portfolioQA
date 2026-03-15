import { useState, useEffect } from 'react'

/**
 * Observes section elements and returns the id of the one
 * currently most visible in the viewport.
 *
 * @param {string[]} sectionIds  - array of element ids to observe
 * @param {number}   threshold   - IntersectionObserver threshold (0–1)
 * @returns {string} activeId
 */
export function useScrollSpy(sectionIds, threshold = 0.35) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, threshold])

  return activeId
}
