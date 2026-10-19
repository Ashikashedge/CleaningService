export default function Testimonials({ items }) {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-heading centered-heading"><p className="eyebrow">Customer notes</p><h2>What a good clean <span className="heading-accent">can feel like.</span></h2><p>Illustrative review copy, shown for the design preview.</p></div>
        <div className="testimonials-grid">
          {items.map((item, index) => <article className="testimonial-card" key={`${item.name}-${index}`}><p className="testimonial-quote">“{item.quote}”</p><div className="testimonial-bottom"><strong>{item.name}</strong><small>{item.detail}</small></div></article>)}
        </div>
        <p className="demo-disclaimer">Demo copy only. Replace with customer feedback approved for publication.</p>
      </div>
    </section>
  );
}
