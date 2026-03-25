// ─────────────────────────────────────────────────────────────────────────────
// components/ExperienceSection.jsx
// Vertical timeline of work experience entries.
// ─────────────────────────────────────────────────────────────────────────────

import { EXPERIENCE } from "../data/index.js";
import SectionHeader from "./SectionHeader.jsx";

function TimelineItem({ exp, index }) {
  return (
    <div
      className="timeline__item reveal"
      style={{ transitionDelay: `${index * 0.14}s` }}
    >
      {/* Left: metadata */}
      <div className="timeline__meta">
        <div className="timeline__period">{exp.period}</div>
        <div className="timeline__company">{exp.company}</div>
        <div className="timeline__location">{exp.location}</div>
      </div>

      {/* Centre: spine + dot */}
      <div className="timeline__spine">
        <div className="timeline__dot" />
      </div>

      {/* Right: role + bullet points */}
      <div className="timeline__body">
        <div className="timeline__role">{exp.role}</div>
        <div className="timeline__bullets">
          {exp.bullets.map((bullet, j) => (
            <div className="timeline__bullet" key={j}>
              <span className="timeline__mark">▸</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <div className="section section--alt" id="experience">
      <SectionHeader num="02" title="Experience" />

      <div className="timeline">
        {EXPERIENCE.map((exp, i) => (
          <TimelineItem key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </div>
  );
}
