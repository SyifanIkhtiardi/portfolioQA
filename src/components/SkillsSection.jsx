// ─────────────────────────────────────────────────────────────────────────────
// components/SkillsSection.jsx
// Six Eyes skill display: three colour-coded groups
// (PERCEPTION / PROCESSING / PERFORMANCE), each with themed skill cards.
// ─────────────────────────────────────────────────────────────────────────────

import { SKILL_GROUPS } from "../data/index.js";
import SectionHeader from "./SectionHeader.jsx";

function SkillCard({ skill, color }) {
  return (
    <div
      className="skill-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}28`;
        e.currentTarget.style.boxShadow   = `0 0 12px ${color}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow   = "";
      }}
    >
      <div className="skill-card__name" style={{ color }}>
        {skill.name}
      </div>
      <div className="skill-card__desc">{skill.desc}</div>
      <div className="skill-card__tags">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="tag"
            style={{
              borderColor: `${color}20`,
              color:        `${color}AA`,
              background:   `${color}08`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillGroup({ group }) {
  const { label, sublabel, color, skills } = group;
  return (
    <div
      className="skill-group"
      style={{ borderColor: `${color}20` }}
    >
      <div className="skill-group__header">
        <div
          className="skill-group__dot"
          style={{ background: color, boxShadow: `0 0 10px ${color}` }}
        />
        <span
          className="skill-group__label"
          style={{ color, textShadow: `0 0 12px ${color}88` }}
        >
          {label}
        </span>
        <span className="skill-group__sublabel">— {sublabel}</span>
      </div>

      <div className="skill-group__grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} color={color} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <div className="section" id="skills">
      <SectionHeader num="03" title="Skills & Tools" />

      <div className="skill-groups reveal">
        {SKILL_GROUPS.map((group) => (
          <SkillGroup key={group.label} group={group} />
        ))}
      </div>
    </div>
  );
}
