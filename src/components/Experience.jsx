import { useGsapReveal, useGsapStagger } from '@/hooks/useGsapReveal'
import SectionHeader from '@/components/SectionHeader'
import { EXPERIENCES } from '@/data/portfolio'

function ExperienceItem({ period, company, role, location, badge, current, summary, tasks }) {
  return (
    <div className="list-row grid-cols-1 md:[grid-template-columns:220px_1fr]">
      {/* Meta */}
      <div>
        <p className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-mid mb-2.5">{period}</p>
        <h3 className="font-serif font-normal text-[1.4rem] text-ink mb-1">{company}</h3>
        <p className="font-mono text-[0.62rem] text-mid leading-[1.6]">{role}<br />{location}</p>
        <span className={`inline-block mt-3.5 px-2.5 py-1 font-mono text-[0.57rem] tracking-[0.08em] uppercase border ${
          current ? 'border-green text-green' : 'border-faint text-mid'
        }`}>
          {badge}
        </span>
      </div>

      {/* Body */}
      <div>
        <p className="text-[0.9rem] leading-[1.8] text-mid mb-5">{summary}</p>
        <ul className="flex flex-col gap-3 mt-4">
          {tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-3.5 text-[0.88rem] leading-[1.75] text-mid">
              <span className="font-mono text-faint flex-shrink-0 mt-0.5">—</span>
              <span dangerouslySetInnerHTML={{ __html: task.replace('k6', '<strong class="text-ink font-medium">k6</strong>') }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const introRef = useGsapReveal({ opacity: 0, y: 28 })
  const listRef  = useGsapStagger('.list-row', { opacity: 0, y: 24 }, { duration: 0.6, ease: 'power3.out', stagger: 0.15 })

  return (
    <section id="experience" className="section-wrap">
      <SectionHeader label="Experience" num="02" />

      <p
        ref={introRef}
        className="font-serif font-normal text-[clamp(1.7rem,3vw,2.8rem)] leading-[1.25] text-ink max-w-[620px] mb-[72px]"
      >
        Two companies, one constant: a commitment to shipping software that actually works.
      </p>

      <div ref={listRef}>
        {EXPERIENCES.map((exp) => (
          <ExperienceItem key={exp.company} {...exp} />
        ))}
      </div>
    </section>
  )
}
