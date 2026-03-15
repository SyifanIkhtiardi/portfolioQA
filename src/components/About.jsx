import { useGsapReveal, useGsapStagger } from '@/hooks/useGsapReveal'
import SectionHeader from '@/components/SectionHeader'
import {
  ABOUT_PARAGRAPHS_LEFT,
  ABOUT_PARAGRAPHS_RIGHT,
  WHAT_I_DO,
} from '@/data/portfolio'

export default function About() {
  const leadRef   = useGsapReveal({ opacity: 0, y: 36 })
  const colsRef   = useGsapStagger('p', { opacity: 0, y: 20 }, { duration: 0.55, ease: 'power3.out', stagger: 0.07 })
  const doingRef  = useGsapStagger('.doing-item', { opacity: 0, y: 18 }, { duration: 0.5, ease: 'power3.out', stagger: 0.1 })

  return (
    <section id="about" className="section-wrap">
      <SectionHeader label="About" num="01" />

      {/* Lead */}
      <p
        ref={leadRef}
        className="font-serif font-normal text-[clamp(1.9rem,3.2vw,3rem)] leading-[1.2] text-ink max-w-[720px] mb-[72px]"
      >
        A QA specialist who believes that quality isn't a phase — it's a mindset woven
        through every stage of development.
      </p>

      {/* Two-column bio */}
      <div ref={colsRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-[88px]">
        <div className="flex flex-col gap-5">
          {ABOUT_PARAGRAPHS_LEFT.map((text, i) => (
            <p key={i} className="text-[0.95rem] leading-[1.85] text-mid [&_strong]:text-ink [&_strong]:font-medium"
               dangerouslySetInnerHTML={{ __html: text.replace('Software Quality Assurance Specialist', '<strong>Software Quality Assurance Specialist</strong>').replace('performance engineering', '<strong>performance engineering</strong>') }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {ABOUT_PARAGRAPHS_RIGHT.map((text, i) => (
            <p key={i} className="text-[0.95rem] leading-[1.85] text-mid [&_strong]:text-ink [&_strong]:font-medium"
               dangerouslySetInnerHTML={{ __html: text.replace('performance\n   engineering', '<strong>performance engineering</strong>') }}
            />
          ))}
        </div>
      </div>

      {/* What I do */}
      <div>
        <p className="font-mono text-[0.63rem] tracking-[0.14em] uppercase text-mid mb-8 pt-16 border-t border-faint">
          What I do
        </p>
        <div ref={doingRef}>
          {WHAT_I_DO.map(({ title, desc }) => (
            <div
              key={title}
              className="doing-item flex items-start gap-10 py-6 border-b border-faint first:border-t first:border-faint transition-[padding-left] duration-300 ease-expo-out hover:pl-2.5"
            >
              <h3 className="font-serif font-normal text-[1.4rem] text-ink flex-[0_0_220px]">{title}</h3>
              <p className="text-[0.88rem] leading-[1.75] text-mid">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
