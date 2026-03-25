// ─────────────────────────────────────────────────────────────────────────────
// App.jsx  (root component)
// Orchestrates the portfolio:
//   - Injects global styles once
//   - Renders background layers (nebula, warp overlay, scroll bar)
//   - Manages the intro → main transition
//   - Wires up all custom hooks
//   - Composes page sections in order
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback } from "react";

// Styles
import { globalStyles }    from "./styles/globalStyles.js";

// Hooks
import {
  useScrollReveal,
  useScrollProgress,
  useRedWave,
  useWarpNav,
  useBlueAttraction,
} from "./hooks/index.js";

// Components
import NebulaCanvas      from "./components/NebulaCanvas.jsx";
import Cursor            from "./components/Cursor.jsx";
import IntroScreen       from "./components/IntroScreen.jsx";
import Navbar            from "./components/Navbar.jsx";
import HeroSection       from "./components/HeroSection.jsx";
import AboutSection      from "./components/AboutSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import SkillsSection     from "./components/SkillsSection.jsx";
import ProjectsSection   from "./components/ProjectsSection.jsx";
import ContactSection    from "./components/ContactSection.jsx";
import Footer            from "./components/Footer.jsx";

export default function App() {
  const [entered, setEntered] = useState(false);

  // ── Always-on effects ────────────────────────────────────────────────────
  useScrollReveal();   // .reveal → .visible on scroll
  useScrollProgress(); // #sbar width tracks scroll position
  useRedWave();        // red shockwave on button/link clicks

  // ── Post-intro effects (enabled only after user enters) ──────────────────
  useWarpNav(entered);       // Hollow Purple transition on nav clicks
  useBlueAttraction(entered); // Blue attraction on project cards

  const handleEnter = useCallback(() => {
    // Fade out intro overlay
    document.getElementById("intro")?.classList.add("intro--gone");
    setEntered(true);
  }, []);

  return (
    <>
      {/* Global CSS injected once */}
      <style>{globalStyles}</style>

      {/* ── Persistent background & UI layers ────────────────────────────── */}
      {/* Hollow Purple warp overlay — animated by useWarpNav */}
      <div id="warp" />
      {/* Scroll progress bar — updated by useScrollProgress */}
      <div id="sbar" />

      <NebulaCanvas />
      <Cursor />

      {/* ── Intro (shown on first load) ───────────────────────────────────── */}
      <IntroScreen onEnter={handleEnter} />

      {/* ── Navigation (fades in after intro) ────────────────────────────── */}
      <Navbar visible={entered} />

      {/* ── Main page sections ───────────────────────────────────────────── */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
