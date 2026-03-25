// ─────────────────────────────────────────────────────────────────────────────
// components/SectionHeader.jsx
// Reusable section header: vertical number + title + gradient rule line.
// ─────────────────────────────────────────────────────────────────────────────

export default function SectionHeader({ num, title }) {
  return (
    <div className="section__header reveal">
      <span className="section__num">{num}</span>
      <h2 className="section__title">{title}</h2>
      <div className="section__rule" />
    </div>
  );
}
