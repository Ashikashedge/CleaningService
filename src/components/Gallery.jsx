import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

export default function Gallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (activeItem && dialog && !dialog.open) dialog.showModal();
  }, [activeItem]);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const handleKey = (event) => {
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % items.length);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, items.length]);

  const close = () => dialogRef.current?.close();

  return (
    <section id="work" className="section gallery-section">
      <div className="container">
        <div className="section-heading section-heading-row"><div><p className="eyebrow">A few spaces</p><h2>Room for a <span className="heading-accent">fresh start.</span></h2></div><p>Reference imagery for homes, workspaces and the in-between.</p></div>
        <div className="gallery-grid">
          {items.map((item, index) => <button className={`gallery-item gallery-item-${index + 1}`} type="button" key={item.title} onClick={() => setActiveIndex(index)} aria-label={`View larger image: ${item.title}`}><img src={item.src} alt={item.alt} loading="lazy" /><span className="gallery-caption"><span><small>{item.category}</small><strong>{item.title}</strong></span><span className="gallery-expand" aria-hidden="true"><Icon name="arrow" size={17} /></span></span></button>)}
        </div>
      </div>
      <dialog ref={dialogRef} className="lightbox" aria-label="Gallery image preview" onCancel={(event) => { event.preventDefault(); close(); }} onClose={() => setActiveIndex(null)}>
        {activeItem && <div className="lightbox-content"><button type="button" className="lightbox-close" onClick={close} aria-label="Close image preview"><Icon name="close" size={22} /></button><img src={activeItem.src.replace(/w=\d+/, 'w=1800')} alt={activeItem.alt} /><div className="lightbox-caption"><span><strong>{activeItem.title}</strong><small>{activeItem.category} · {activeIndex + 1} of {items.length}</small></span><div className="lightbox-controls"><button type="button" onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)} aria-label="Previous image">←</button><button type="button" onClick={() => setActiveIndex((activeIndex + 1) % items.length)} aria-label="Next image">→</button></div></div></div>}
      </dialog>
    </section>
  );
}
