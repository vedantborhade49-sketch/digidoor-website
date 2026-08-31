import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Success() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="approach-success full-width-section section-padding bg-white text-navy">
      <div className="container">
        <div className="success-header reveal-element">
          <span className="label text-blue">WHAT SUCCESS LOOKS LIKE</span>
          <h2 className="success-heading h2-major">
            Attention is only<br />the beginning.
          </h2>
        </div>

        <div className="success-cascade">
          {['BE SEEN', 'BE REMEMBERED', 'BE CONSIDERED', 'BE CHOSEN', 'PERFORM', 'GROW'].map((item, idx) => (
            <div 
              key={idx} 
              className="success-item reveal-element" 
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <h3 className={`success-title ${idx >= 4 ? 'highlight' : ''}`}>{item}</h3>
              {idx < 5 && <div className="success-arrow text-blue">↓</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
