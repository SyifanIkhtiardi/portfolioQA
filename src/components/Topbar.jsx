import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/data/portfolio'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''))

export default function Topbar() {
  const activeId  = useScrollSpy(SECTION_IDS)
  const progress  = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu on resize
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ─── Progress bar ─── */}
      <div
        className="fixed top-0 left-0 h-[1.5px] bg-ink z-[300] transition-[width] duration-75"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* ─── Topbar ─── */}
      <header className="fixed top-0 left-0 right-0 h-[60px] bg-bg border-b border-faint flex items-center justify-between px-14 z-[200]">

        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-[0.72rem] font-medium tracking-[0.08em] uppercase text-ink no-underline"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          style={{ cursor: 'none' }}
        >
          SI.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <a
                key={id}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                className={`nav-underline font-mono text-[0.66rem] tracking-[0.1em] uppercase no-underline px-[18px] py-2 transition-colors duration-200 ${
                  activeId === id ? 'text-ink active' : 'text-mid hover:text-ink'
                }`}
                style={{ cursor: 'none' }}
                aria-current={activeId === id ? 'page' : undefined}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Status badge */}
        <div className="hidden md:flex items-center gap-1.5 font-mono text-[0.62rem] tracking-[0.08em] text-mid">
          <span className="w-1.5 h-1.5 rounded-full bg-green dot-blink" />
          Open to work
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-1 bg-transparent border-0"
          style={{ cursor: 'none' }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-x-[3px] translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 translate-x-[3px] -translate-y-[7px]' : ''}`} />
        </button>
      </header>

      {/* ─── Mobile menu ─── */}
      {menuOpen && (
        <div
          className="fixed top-[60px] left-0 right-0 bg-bg border-b border-faint flex flex-col z-[190] py-4"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              className="font-mono text-[0.72rem] tracking-[0.1em] uppercase no-underline text-mid px-8 py-3.5 border-b border-faint last:border-b-0 hover:text-ink hover:pl-10 transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
