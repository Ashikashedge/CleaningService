import Icon from './Icon';

const steps = [
  { number: '01', title: 'Choose Your Service', copy: 'Pick the closest fit from the options above.', icon: 'sparkle' },
  { number: '02', title: 'Request a Quote', copy: 'Tell the team about the property and your priorities.', icon: 'quote' },
  { number: '03', title: 'Confirm Your Booking', copy: 'Discuss availability and agree on the details.', icon: 'calendar' },
];

export default function HowItWorks({ onQuote }) {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-heading centered-heading"><p className="eyebrow">Getting started</p><h2>From enquiry to <span className="heading-accent">booking.</span></h2><p>Choose a service, tell us about the space, then confirm the details with the team.</p></div>
        <div className="process-grid">
          {steps.map((step, index) => <article className="process-step" key={step.number}><div className="step-topline"><span className="step-number">{step.number}</span>{index < steps.length - 1 && <span className="step-connector" />}</div><span className="step-icon"><Icon name={step.icon} size={22} /></span><h3>{step.title}</h3><p>{step.copy}</p></article>)}
        </div>
        <div className="process-cta"><span>Have a question about your space?</span><button type="button" className="text-link" onClick={onQuote}>Tell us about it <Icon name="arrow" size={16} /></button></div>
      </div>
    </section>
  );
}
