import Icon from './Icon';

const benefits = [
  ['Attention to Detail', 'A closer look at the corners and finishing touches.', 'sparkle'],
  ['Flexible Scheduling', 'Choose a time that works with the shape of your day.', 'calendar'],
  ['Tailored Cleaning Solutions', 'Start with your space and what needs attention.', 'leaf'],
  ['Friendly Customer Support', 'Ask questions while you plan your clean.', 'user'],
];

export default function AboutUs({ config }) {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-visual"><img src={config.about.image} alt={config.about.imageAlt} loading="lazy" /></div>
        <div className="about-copy">
          <p className="eyebrow">About SparkClean</p>
          <h2>Professional cleaning, <span className="heading-accent">made simple.</span></h2>
          <p className="about-intro">{config.about.intro}</p>
          <div className="benefits-grid">
            {benefits.map(([title, description, icon]) => <article className="benefit-item" key={title}><span className="benefit-icon"><Icon name={icon} size={17} /></span><div><h3>{title}</h3><p>{description}</p></div></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
