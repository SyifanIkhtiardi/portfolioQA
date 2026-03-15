import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Attaches a GSAP from-animation to a ref element when it enters the viewport.
 *
 * @param {object} fromVars   - gsap.from() vars (e.g. { opacity:0, y:32 })
 * @param {object} toVars     - extra gsap tweenVars (duration, ease, delay, etc.)
 * @param {object} stOptions  - ScrollTrigger options override
 */
export function useGsapReveal(
  fromVars  = { opacity: 0, y: 32 },
  toVars    = { duration: 0.75, ease: 'power3.out' },
  stOptions = {}
) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...fromVars,
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start:   'top 85%',
          once:    true,
          ...stOptions,
        },
      })
    }, el)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}

/**
 * Attaches staggered GSAP from-animations to a list of child elements.
 *
 * @param {string}  childSelector  - CSS selector for children
 * @param {object}  fromVars
 * @param {object}  toVars         - include `stagger` here
 * @param {object}  stOptions
 */
export function useGsapStagger(
  childSelector,
  fromVars  = { opacity: 0, y: 24 },
  toVars    = { duration: 0.55, ease: 'power3.out', stagger: 0.08 },
  stOptions = {}
) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(childSelector), {
        ...fromVars,
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start:   'top 85%',
          once:    true,
          ...stOptions,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [childSelector]) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}
