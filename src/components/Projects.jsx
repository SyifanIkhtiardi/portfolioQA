import { useGsapReveal, useGsapStagger } from '@/hooks/useGsapReveal'
import SectionHeader from '@/components/SectionHeader'
import { PROJECTS } from '@/data/portfolio'

function ProjectItem({ index, type, name, desc, tech, link, linkLabel }) {
  return (
    <div className="list-row grid-cols-1 md:[grid-template-columns:220px_1fr]">
      {/* Meta */}
      <div>
        <p className="font-mono text-[0.59rem] tracking-[0.12em] uppercase text-faint mb-2.5">
          Project — {index}
        </p>
        <p className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-mid">{type}</p>
      </div>

      {/* Body */}
      <div>
        <h3 className="font-serif font-normal text-[2.2rem] leading-[1.1] text-ink mb-4">
          {name.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </h3>
        <p className="text-[0.9rem] leading-[1.8] text-mid mb-7 max-w-[560px]">{desc}</p>

        <div className="flex flex-wrap gap-2 mb-7">
          {tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[0.62rem] tracking-[0.06em] text-mid px-2.5 py-1 border border-faint"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.08em] uppercase text-ink no-underline border-b border-ink pb-px transition-[gap] duration-300 hover:gap-3.5"
          style={{ cursor: 'none' }}
        >
          {linkLabel} →
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const introRef = useGsapReveal({ opacity: 0, y: 28 })
  const listRef  = useGsapStagger('.list-row', { opacity: 0, y: 24 }, { duration: 0.6, ease: 'power3.out', stagger: 0.12 })

  return (
    <section id="projects" className="section-wrap">
      <SectionHeader label="Projects" num="04" />

      <p
        ref={introRef}
        className="font-serif font-normal text-[clamp(1.7rem,3vw,2.8rem)] leading-[1.25] text-ink max-w-[620px] mb-[72px]"
      >
        Personal work — experiments in automation and the craft of testing.
      </p>

      <div ref={listRef}>
        {PROJECTS.map((project) => (
          <ProjectItem key={project.index} {...project} />
        ))}
      </div>
    </section>
  )
}
