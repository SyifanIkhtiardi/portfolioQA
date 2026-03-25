// ─────────────────────────────────────────────────────────────────────────────
// components/Navbar.jsx
// Floating bottom navigation — hidden until intro is dismissed.
// Nav link clicks trigger the Hollow Purple warp transition (via useWarpNav).
// ─────────────────────────────────────────────────────────────────────────────

import { NAV_ITEMS } from "../data/index.js";

export default function Navbar({ visible }) {
  return (
    <nav className={`nav${visible ? " show" : ""}`}>
      <div className="nav__brand">SI / VOID</div>

      <ul className="nav__links">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a href={`#${item}`} className="nav__link">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav__pip" />
    </nav>
  );
}
