import Icon from './Icon';

export default function Services({ items, onQuote }) {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">The services</p><h2>Cleaning for your kind <span className="heading-accent">of space.</span></h2></div>
          <p>Regular upkeep, a detailed clean, or help between addresses. Start with what your space needs.</p>
        </div>
        <div className="services-grid">
          {items.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-image-wrap"><img src={service.image} alt={service.imageAlt} loading="lazy" /></div>
              <div className="service-card-body">
                <div className="service-title-row"><h3>{service.title}</h3></div>
                <p>{service.description}</p>
                <button className="text-link" type="button" onClick={() => onQuote(service.title)}>Ask about this service <Icon name="arrow" size={17} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
