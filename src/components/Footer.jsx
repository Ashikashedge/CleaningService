import Icon from './Icon';
import Brand from './Brand';

export default function Footer({ config }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column"><Brand config={config} className="footer-brand" /><p>{config.tagline}</p><a className="footer-email" href={`mailto:${config.contact.email}`}><Icon name="mail" size={16} />{config.contact.email}</a><p className="footer-demo-note">{config.contact.demoNotice}</p></div>
        <div className="footer-links-column"><h2>Explore</h2><div className="footer-links"><a href="#services">Services</a><a href="#about">About Us</a><a href="#work">Our Work</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a></div></div>
        <div className="footer-links-column"><h2>Get in touch</h2><div className="footer-links"><a href={`tel:${config.contact.phoneLink}`}>{config.contact.phoneDisplay}</a><a href="#contact">Request a Quote</a><span>{config.contact.address}</span></div><div className="social-links">{config.socialLinks.map((social) => <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>{social.label}</a>)}</div>{config.privacyPolicyUrl && <a className="privacy-link" href={config.privacyPolicyUrl}>Privacy Policy</a>}</div>
      </div>
      <div className="footer-bottom"><div className="container footer-bottom-inner"><span>© {year} {config.companyName}. All rights reserved.</span><a href="#home">Back to top <Icon name="arrowUp" size={15} /></a></div></div>
    </footer>
  );
}
