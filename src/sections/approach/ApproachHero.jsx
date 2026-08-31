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
    <section ref={ref} className="approach-hero full-width-section">
      <div className="container approach-hero-inner">
        <div className="reveal-element approach-hero-label-wrapper">
          <span className="label text-blue">OUR APPROACH</span>
        </div>
        
        <div className="approach-hero-main">
          <h1 className="reveal-element approach-hero-heading">
            We don't start<br />
            with the answer.
          </h1>
          
          <div className="approach-hero-aside">
            <p className="reveal-element body approach-hero-body" style={{ transitionDelay: '0.1s' }}>
              Every real-estate project begins with a different question.
              <br /><br />
              We find the right one.
            </p>

            <div className="reveal-element approach-hero-ctas" style={{ transitionDelay: '0.2s' }}>
              <button 
                onClick={() => handleScrollTo('approach-journey')} 
                className="btn-primary"
              >
                SEE HOW WE WORK <span className="arrow-down" aria-hidden="true">↓</span>
              </button>
            </div>
            
            {/* Minimal Animated Dot System */}
            <div className="hero-insight-visual reveal-element" style={{ transitionDelay: '0.4s' }} aria-hidden="true">
               <div className="h-dot"></div>
               <div className="h-line line-1"></div>
               <div className="h-dot h-dot-2"></div>
               <div className="h-line line-2"></div>
               <div className="h-dot h-dot-3"></div>
               <div className="h-line line-3"></div>
               <div className="h-dot h-dot-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
