import { useState } from 'react';
import Icon from './Icon';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-grid">
        <div className="faq-intro"><p className="eyebrow">Before you enquire</p><h2>A few useful <span className="heading-accent">details.</span></h2><p>Every property is different. These answers are a starting point; the team can confirm the specifics.</p><a className="text-link" href="#contact">Ask the team <Icon name="arrow" size={16} /></a></div>
        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-answer-${index + 1}`;
            return <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}><h3><button type="button" className="faq-question" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)}><span>{item.question}</span><span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span></button></h3><div id={panelId} className="faq-answer" hidden={!isOpen}><p>{item.answer}</p></div></article>;
          })}
        </div>
      </div>
    </section>
  );
}
