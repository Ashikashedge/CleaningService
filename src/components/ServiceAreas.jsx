export default function ServiceAreas({ config }) {
  return (
    <section className="section areas-section">
      <div className="container areas-inner">
        <div className="areas-copy"><p className="eyebrow">Service areas</p><h2>Example service <span className="heading-accent">areas.</span></h2><p>These UAE locations are here as a guide for the demo. Check with the business to confirm whether your address is covered.</p><span className="areas-note">Availability to be confirmed</span></div>
        <div className="areas-list" aria-label="Example UAE locations">
          {config.serviceAreas.map((area, index) => <div className="area-listing" key={area}><span>0{index + 1}</span><strong>{area}</strong></div>)}
        </div>
      </div>
    </section>
  );
}
