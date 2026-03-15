import { useGsapReveal, useGsapStagger } from '@/hooks/useGsapReveal'
import SectionHeader from '@/components/SectionHeader'
import { CONTACT_LINKS } from '@/data/portfolio'

export default function Contact() {
  const headingRef = useGsapReveal({ opacity: 0, y: 36 }, { duration: 0.8 })
  const subRef     = useGsapReveal({ opacity: 0, y: 20 }, { duration: 0.65, delay: 0.1 })
  const listRef    = useGsapStagger('.contact-link', { opacity: 0, x: -16 }, { duration: 0.5, ease: 'power3.out', stagger: 0.08 })

  return (
    <section id="contact" className="section-wrap min-h-[80vh]">
      <SectionHeader label="Contact" num="05" />

      <div className="max-w-[700px]">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-serif font-normal text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.95] text-ink mb-12"
        >
          Let's work<br />
          <em className="italic text-mid">together.</em>
        </h2>

        {/* Sub */}
        <p
          ref={subRef}
          className="text-[1rem] leading-[1.8] text-mid mb-[72px] max-w-[480px]"
        >
          Open to new opportunities, collaborations, and conversations about quality
          engineering. Reach out through any channel below.
        </p>

        {/* Links */}
        <div ref={listRef}>
          {CONTACT_LINKS.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-link"
              style={{ cursor: 'none' }}
            >
              <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-mid w-[90px] flex-shrink-0">
                {label}
              </span>
              <span className="font-serif font-normal text-[1.5rem] text-ink flex-1 pl-9">
                {value}
              </span>
              <span className="font-mono text-[0.72rem] text-faint transition-[color,transform] duration-200 group-hover:text-ink group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
