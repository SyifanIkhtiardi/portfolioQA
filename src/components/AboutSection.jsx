// ─────────────────────────────────────────────────────────────────────────────
// components/AboutSection.jsx
// Two-column layout: bio paragraphs (left) + profile data card (right).
// ─────────────────────────────────────────────────────────────────────────────

import { OWNER } from "../data/index.js";
import SectionHeader from "./SectionHeader.jsx";

const PROFILE_ROWS = [
  ["Name",       OWNER.name],
  ["Role",       "Software QA Specialist"],
  ["Education",  OWNER.education],
  ["University", OWNER.university],
  ["Location",   OWNER.location],
  ["Languages",  OWNER.languages],
  ["Contact",    OWNER.email],
  ["Status",     OWNER.status],
];

export default function AboutSection() {
  return (
    <div className="section" id="about">
      <SectionHeader num="01" title="About" />

      <div className="about">
        {/* Bio text */}
        <div className="about__text reveal">
          <p>
            A <strong>Software Quality Assurance Specialist</strong> with hands-on
            experience across mobile apps, web platforms, admin panels, and internal
            enterprise systems. I bring a systematic, detail-oriented approach to
            every project — from test planning to final sign-off.
          </p>
          <p>
            My work spans diverse industries including{" "}
            <strong>retail loyalty, education, healthcare, HR, and compliance</strong>.
            I collaborate closely with developers, designers, and product managers
            to catch defects early and ensure every release meets the highest standards.
          </p>
          <p>
            Beyond testing, I invest in{" "}
            <strong>clear documentation and user advocacy</strong> — writing guides
            that help real users succeed and reporting that keeps stakeholders aligned
            throughout the development cycle.
          </p>
        </div>

        {/* Profile card */}
        <div className="about__card reveal">
          {PROFILE_ROWS.map(([key, val]) => (
            <div className="about__row" key={key}>
              <span className="about__key">{key}</span>
              <span className="about__val">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
