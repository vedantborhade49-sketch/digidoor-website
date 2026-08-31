import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function WorkCTA() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="work-cta full-width-section bg-navy text-white section-padding">
      <div className="container work-cta-content reveal-element">
        <h2 className="work-cta-heading h2-major">
          Have something<br />
          worth moving?
        </h2>
        
        <div className="work-cta-body">
          <p className="body-large">
            Tell us about the project.<br />
            We'll figure out where to take it.
          </p>
          
          <Link to="/contact" className="btn-primary cta-btn mt-8">
            START A CONVERSATION <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
