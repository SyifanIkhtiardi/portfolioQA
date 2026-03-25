// ─────────────────────────────────────────────────────────────────────────────
// components/ProjectsSection.jsx
// Six Eyes HUD scanner overlay (closed state) + Blue attraction scroll-in.
// Each card starts off-screen and is attracted into view on scroll
// via the useBlueAttraction hook in App.
// ─────────────────────────────────────────────────────────────────────────────

import { PROJECTS } from "../data/index.js";
import SectionHeader from "./SectionHeader.jsx";

function HudOverlay({ coord, scanType, badge, title }) {
  return (
    <div className="project-card__hud">
      {/* Animated horizontal scan line */}
      <div className="project-card__hud-scan" />

      {/* Corner brackets (Six Eyes analysis frame) */}
      <div className="project-card__hud-corner project-card__hud-corner--tl" />
      <div className="project-card__hud-corner project-card__hud-corner--tr" />
      <div className="project-card__hud-corner project-card__hud-corner--bl" />
      <div className="project-card__hud-corner project-card__hud-corner--br" />

      <div className="project-card__hud-coord">COORD {coord}</div>
      <div className="project-card__hud-type">TYPE / {scanType}</div>
      <div className="project-card__hud-badge">{badge}</div>
      <div className="project-card__hud-title">{title}</div>
      <div className="project-card__hud-hint">hover to analyze</div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card"
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <HudOverlay
        coord={project.coord}
        scanType={project.scanType}
        badge={project.badge}
        title={project.title}
      />

      {/* Banner */}
      <div className="project-card__banner">
        <div className="project-card__banner-bg">{project.bg}</div>
        <span className="project-card__badge">{project.badge}</span>
        <div className="project-card__icon">◈ TARGET ACQUIRED</div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__title">{project.title}</div>
        <div className="project-card__desc">{project.desc}</div>

        <div className="project-card__footer">
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>

          {project.github && (
            <a
              className="project-card__github"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              ↗ View Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <div className="section section--alt" id="projects">
      <SectionHeader num="04" title="Projects" />

      <div className="project-grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
