import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function ApproachCTA() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="approach-cta full-width-section section-padding bg-navy text-white">
      <div className="container approach-cta-content reveal-element">
        <h2 className="approach-cta-heading h2-major">
          Have a project<br />
          worth moving?
        </h2>
        
        <div className="approach-cta-body">
          <p className="body-large">
            Let's understand it.<br />
            Let's build it.<br />
            Let's move it forward.
          </p>
          
          <Link to="/contact" className="btn-primary cta-btn">
            START A CONVERSATION <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
