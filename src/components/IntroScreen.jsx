// ─────────────────────────────────────────────────────────────────────────────
// components/IntroScreen.jsx
// "Information Overload" intro animation:
//   1. Code snippets rain in random order at high speed.
//   2. Owner name fades in from blur.
//   3. "Enter The Void" button appears.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { CODE_RAIN, OWNER } from "../data/index.js";

// Cycle through these three colours for visual variety
const RAIN_COLORS = [
  "rgba(59,130,246,0.48)",
  "rgba(168,85,247,0.44)",
  "rgba(239,68,68,0.32)",
];

const REVEAL_DELAY_MS   = 1500; // show Enter button after this
const LINE_INTERVAL_MS  = 95;   // ms between each code line appearing

export default function IntroScreen({ onEnter }) {
  const [lines, setLines] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const shuffled = [...CODE_RAIN].sort(() => Math.random() - 0.5);

    const lineTimers = shuffled.map((text, i) =>
      setTimeout(
        () => setLines((prev) => [...prev, { text, col: RAIN_COLORS[i % 3] }]),
        i * LINE_INTERVAL_MS
      )
    );

    const readyTimer = setTimeout(() => setReady(true), REVEAL_DELAY_MS);

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(readyTimer);
    };
  }, []);

  return (
    <div id="intro" className="intro">
      {/* Code rain backdrop */}
      <div className="intro__rain">
        {lines.map((l, i) => (
          <div
            key={i}
            className="intro__rain-line"
            style={{ color: l.col, animationDelay: `${i * 0.038}s` }}
          >
            {l.text}
          </div>
        ))}
      </div>

      {/* Centre content */}
      <div className="intro__center">
        <div className="intro__name">
          SYIFAN <em>IKHTIARDI</em>
        </div>
        <div className="intro__sub">{OWNER.role}</div>
        {ready && (
          <button className="intro__btn" onClick={onEnter}>
            Enter The Void
          </button>
        )}
      </div>
    </div>
  );
}
