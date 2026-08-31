import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ApproachHero() {
  const ref = useScrollReveal();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="approach-hero container section-padding">
      <div className="approach-hero-inner">
        <div className="reveal-element approach-hero-label-wrapper">
          <span className="label">OUR APPROACH</span>
        </div>
        
        <div className="approach-hero-main">
          <h1 className="reveal-element approach-hero-heading">
            We don't start<br />
            with the answer.<br />
            <br />
            <span className="text-blue">We start</span><br />
            <span className="text-blue">with the question.</span>
          </h1>
          
          <div className="approach-hero-aside">
            <p className="reveal-element body approach-hero-body" style={{ transitionDelay: '0.1s' }}>
              Every real-estate project is different.
              <br /><br />
              Our job is to understand what makes it matter,
              find the opportunity, and turn that understanding
              into work that moves people and business.
            </p>

            <div className="reveal-element approach-hero-ctas" style={{ transitionDelay: '0.2s' }}>
              <button 
                onClick={() => handleScrollTo('approach-journey')} 
                className="btn-primary"
              >
                SEE HOW WE WORK <span className="arrow-down" aria-hidden="true">↓</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Hero Visual System */}
      <div className="approach-hero-visual" aria-hidden="true">
        <div className="hero-dot"></div>
        <div className="hero-line h-line"></div>
        <div className="hero-dot right"></div>
        <div className="hero-line v-line"></div>
        <div className="hero-dot bottom"></div>
        <div className="hero-grid-lines">
          <span></span><span></span><span></span>
        </div>
      </div>
    </section>
  );
}
