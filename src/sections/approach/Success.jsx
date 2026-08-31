import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Success() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="approach-success container section-padding">
      <div className="success-header reveal-element">
        <span className="label">WHAT SUCCESS LOOKS LIKE</span>
        <h2 className="success-heading">
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
            {idx < 5 && <div className="success-arrow">↓</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
