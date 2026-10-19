import { useEffect, useState } from 'react';
import Icon from './Icon';

export default function WhatsAppButton({ config }) {
  const [contactVisible, setContactVisible] = useState(false);
  const number = config.contact.whatsappNumber.replace(/\D/g, '');
  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting));
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);
  if (!number || contactVisible) return null;
  const message = encodeURIComponent(`Hello ${config.companyName}, I'd like to ask about your cleaning services.`);
  return <a className="whatsapp-float" href={`https://wa.me/${number}?text=${message}`} target="_blank" rel="noreferrer" aria-label={`Chat with ${config.companyName} on WhatsApp`}><Icon name="whatsapp" size={24} /><span>Chat with us</span></a>;
}
