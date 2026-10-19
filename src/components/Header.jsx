import { useState } from 'react';
import Icon from './Icon';
import Brand from './Brand';

const links = [
  ['Home', '#home'], ['Services', '#services'], ['About Us', '#about'],
  ['Our Work', '#work'], ['Reviews', '#reviews'], ['FAQ', '#faq'], ['Contact', '#contact'],
];

export default function Header({ config, onQuote }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Brand config={config} onClick={closeMenu} />
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen((open) => !open)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <button className="button button-small button-primary nav-quote" type="button" onClick={() => { closeMenu(); onQuote(); }}>Get a Free Quote <Icon name="arrow" size={16} /></button>
        </nav>
      </div>
    </header>
  );
}
