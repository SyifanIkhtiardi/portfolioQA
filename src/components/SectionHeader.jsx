/**
 * Consistent section header row used across all sections.
 */
export default function SectionHeader({ label, num }) {
  return (
    <div className="sec-row">
      <span className="sec-label">{label}</span>
      <span className="sec-num">{num}</span>
    </div>
  )
}
