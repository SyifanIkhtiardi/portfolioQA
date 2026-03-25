// ─────────────────────────────────────────────────────────────────────────────
// components/HeroSection.jsx
// Full-viewport hero with name, role, description, CTA buttons, and data strip.
// ─────────────────────────────────────────────────────────────────────────────

import { OWNER, HERO_STRIP } from "../data/index.js";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero__tag">{OWNER.role}</div>

      <h1 className="hero__name">
        SYIFAN <em>IKHTIARDI</em>
      </h1>

      <p className="hero__role">{OWNER.tagline}</p>

      <p className="hero__desc">
        Seasoned QA Specialist with a proven track record of ensuring high-quality
        software deliverables through meticulous test planning, automation, and
        cross-functional collaboration.
      </p>

      <div className="hero__btns">
        <a href="#experience" className="btn-primary">View Experience</a>
        <a href="#contact"    className="btn-ghost">Get In Touch</a>
      </div>

      <div className="hero__strip">
        {HERO_STRIP.map(({ label, value }) => (
          <div className="hero__strip-item" key={label}>
            <span className="hero__strip-label">{label}</span>
            <span className="hero__strip-value">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
