import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionEyebrow from '../../components/ui/SectionEyebrow';
import RevealText from '../../components/ui/RevealText';

export default function CareerHero() {
  const ref = useScrollReveal();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="career-hero container section-padding">
      <div className="career-hero-inner">
        <SectionEyebrow number="01" title="CAREERS" className="mb-8" />
        
        <div className="career-hero-main">
          <RevealText 
            elementType="h1" 
            className="display-heading career-hero-heading text-uppercase" 
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1 }}
            text={[
              <span key="1">BUILD THINGS</span>,
              <span key="2">WORTH OPENING.</span>,
              <span key="3">WITH A LITTLE MORE</span>,
              <span key="4" className="accent-serif text-blue text-lowercase" style={{ fontSize: '1.2em' }}>curiosity.</span>
            ]}
          />
          
          <div className="career-hero-aside">
            <p className="reveal-element body career-hero-body" style={{ transitionDelay: '0.1s' }}>
              At Digidoor, creativity meets real estate.
              We build brands, campaigns and digital experiences
              that make people stop, feel and act.
            </p>

            <div className="reveal-element career-hero-ctas" style={{ transitionDelay: '0.2s' }}>
              <button 
                onClick={() => handleScrollTo('open-positions')} 
                className="btn-primary"
              >
                VIEW OPEN POSITIONS <span className="arrow" aria-hidden="true">→</span>
              </button>
              
              <button 
                onClick={() => handleScrollTo('dont-see-your-role')} 
                className="btn-secondary"
              >
                SEND YOUR PROFILE <span className="arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle visual language */}
      <div className="career-hero-decoration" aria-hidden="true">
        <div className="deco-line vertical left"></div>
        <div className="deco-line horizontal bottom"></div>
        <div className="deco-coordinate">SYS.42.REAL.ESTATE</div>
      </div>
    </section>
  );
}
