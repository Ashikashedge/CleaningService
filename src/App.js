import { useEffect, useState } from 'react';
import './App.css';
import { siteConfig } from './data/siteConfig';
import { services } from './data/services';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustHighlights from './components/TrustHighlights';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ServiceAreas from './components/ServiceAreas';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [selectedService, setSelectedService] = useState('');
  const brandStyles = {
    '--ink': siteConfig.brand.primary,
    '--teal': siteConfig.brand.accent,
    '--teal-dark': siteConfig.brand.accentDark || siteConfig.brand.accent,
    '--paper': siteConfig.brand.background,
    '--soft': siteConfig.brand.soft,
    '--muted': siteConfig.brand.muted,
  };

  useEffect(() => {
    document.title = `${siteConfig.companyName} | ${siteConfig.hero.title}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', siteConfig.hero.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${siteConfig.companyName} | ${siteConfig.hero.title}`);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', siteConfig.hero.description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', siteConfig.hero.image);
  }, []);

  const requestQuote = (serviceName = '') => {
    setSelectedService(serviceName);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell" style={brandStyles}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header config={siteConfig} onQuote={() => requestQuote()} />
      <main id="main">
        <Hero config={siteConfig} onQuote={() => requestQuote()} />
        <TrustHighlights />
        <Services items={services} onQuote={requestQuote} />
        <AboutUs config={siteConfig} />
        <HowItWorks onQuote={() => requestQuote()} />
        <Gallery items={siteConfig.gallery} />
        <Testimonials items={siteConfig.testimonials} />
        <FAQ items={siteConfig.faqs} />
        <ServiceAreas config={siteConfig} />
        <QuoteForm config={siteConfig} services={services} selectedService={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer config={siteConfig} />
      <WhatsAppButton config={siteConfig} />
    </div>
  );
}

export default App;
