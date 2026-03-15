import { SOCIAL_LINKS } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="px-[120px] py-8 border-t border-faint flex items-center justify-between flex-wrap gap-4 max-sm:px-7 max-sm:flex-col max-sm:text-center">
      <span className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-faint">
        © {new Date().getFullYear()} Syifan Ikhtiardi
      </span>
      <div className="flex gap-6">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="font-mono text-[0.6rem] tracking-[0.08em] uppercase no-underline text-mid transition-colors duration-200 hover:text-ink"
            style={{ cursor: 'none' }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
