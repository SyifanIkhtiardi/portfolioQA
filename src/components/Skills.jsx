import { useGsapReveal, useGsapStagger } from '@/hooks/useGsapReveal'
import SectionHeader from '@/components/SectionHeader'
import { SKILL_GROUPS } from '@/data/portfolio'

export default function Skills() {
  const introRef = useGsapReveal({ opacity: 0, y: 28 })
  const listRef  = useGsapStagger('.list-row', { opacity: 0, y: 18 }, { duration: 0.5, ease: 'power3.out', stagger: 0.08 })

  return (
    <section id="skills" className="section-wrap">
      <SectionHeader label="Skills" num="03" />

      <p
        ref={introRef}
        className="font-serif font-normal text-[clamp(1.7rem,3vw,2.8rem)] leading-[1.25] text-ink max-w-[620px] mb-[72px]"
      >
        The tools and disciplines I rely on to keep software quality high and teams
        moving fast.
      </p>

      <div ref={listRef}>
        {SKILL_GROUPS.map(({ category, items }) => (
          <div
            key={category}
            className="list-row grid-cols-1 md:[grid-template-columns:220px_1fr] items-start"
          >
            <p className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-mid pt-1">
              {category}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {items.map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
