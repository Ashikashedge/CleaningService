const highlights = [
  'Home cleaning',
  'Office cleaning',
  'Deep cleaning',
  'Move-in / move-out',
];

export default function TrustHighlights() {
  return (
    <section className="trust-section" aria-label="Service highlights">
      <div className="container trust-grid">
        {highlights.map((label) => <div className="trust-item" key={label}><span>{label}</span></div>)}
      </div>
    </section>
  );
}
