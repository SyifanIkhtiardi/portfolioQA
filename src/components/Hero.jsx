import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.2 })
        .from('.hero-pre',  { opacity: 0, y: 20, duration: 0.65, ease: 'power3.out' })
        .from('.hero-name', { opacity: 0, y: 56, duration: 0.85, ease: 'power3.out' }, '-=0.35')
        .from('.hero-body', { opacity: 0, y: 24, duration: 0.65, ease: 'power3.out' }, '-=0.45')
        .from('.hero-cta',  { opacity: 0, y: 16, duration: 0.55, ease: 'power3.out' }, '-=0.35')
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = (e) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={wrapRef}
      className="section-wrap min-h-screen flex flex-col justify-center pt-[calc(60px+80px)]"
    >
      {/* Eyebrow */}
      <p className="hero-pre font-mono text-[0.66rem] tracking-[0.16em] uppercase text-mid mb-8 flex items-center gap-3.5 before:inline-block before:w-9 before:h-px before:bg-mid">
        Software Quality Assurance Specialist
      </p>

      {/* Name */}
      <h1 className="hero-name font-serif font-normal text-[clamp(4.5rem,9vw,9rem)] leading-[0.95] tracking-[-0.02em] text-ink mb-12">
        Syifan<br />
        <em className="italic text-mid">Ikhtiardi</em>
      </h1>

      {/* Body */}
      <p className="hero-body max-w-[560px] text-[1.05rem] leading-[1.85] text-mid mb-14">
        Your dedicated QA specialist — turning specs into bulletproof software through{' '}
        <strong className="text-ink font-medium">meticulous test planning</strong>, deep
        defect analysis, and seamless collaboration with development teams. I find beauty
        in a clean test report and craft in a well-written user guide.
      </p>

      {/* CTA */}
      <a
        href="#about"
        onClick={scrollToAbout}
        className="hero-cta inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.1em] uppercase text-ink no-underline border-b border-ink pb-0.5 w-fit transition-[gap] duration-300 hover:gap-[18px]"
        style={{ cursor: 'none' }}
      >
        More about me →
      </a>
    </section>
  )
}
