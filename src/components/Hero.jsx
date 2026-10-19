import Icon from './Icon';

export default function Hero({ config, onQuote }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{config.hero.eyebrow}</p>
          <h1>{config.hero.title.split('. ').map((part, index, all) => <span key={part} className={index === all.length - 1 ? 'heading-accent' : ''}>{part}{index < all.length - 1 ? '.' : ''}{index < all.length - 1 && <br />}</span>)}</h1>
          <p className="hero-description">{config.hero.description}</p>
          <div className="hero-actions">
            <button type="button" className="button button-primary" onClick={onQuote}>Get a Free Quote <Icon name="arrow" size={17} /></button>
            <a className="button button-secondary" href="#services">Explore Our Services</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={config.hero.image} alt={config.hero.imageAlt} fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
