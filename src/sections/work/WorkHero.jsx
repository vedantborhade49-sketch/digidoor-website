import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function WorkHero() {
  const ref = useScrollReveal();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="work-hero full-width-section bg-offwhite text-navy relative-overflow">
      <div className="grid-overlay-light"></div>
      <div className="container work-hero-inner">
        <div className="work-hero-content">
          <div className="reveal-element">
            <span className="label text-blue">OUR WORK</span>
          </div>
          <h1 className="work-hero-heading reveal-element" style={{ transitionDelay: '0.1s' }}>
            Work that makes<br />
            real estate<br />
            matter.
          </h1>
          <div className="work-hero-body reveal-element" style={{ transitionDelay: '0.2s' }}>
            <p className="body-large">
              From positioning a new development to building the campaign that launches it into the market, we bring strategy, creativity, communication and digital together.
            </p>
            <button 
              onClick={() => handleScrollTo('featured-work')} 
              className="btn-primary mt-8"
            >
              EXPLORE THE WORK <span className="arrow-down" aria-hidden="true">↓</span>
            </button>
          </div>
        </div>

        <div className="work-hero-visual reveal-element" style={{ transitionDelay: '0.3s' }}>
          {/* Abstract architectural structure as placeholder for visual system */}
          <div className="abstract-grid">
            <div className="ag-line vert l1"></div>
            <div className="ag-line vert l2"></div>
            <div className="ag-line vert l3"></div>
            <div className="ag-line horiz l4"></div>
            <div className="ag-line horiz l5"></div>
            <div className="ag-box b1"></div>
            <div className="ag-box b2"></div>
            <div className="ag-text t1">BRAND</div>
            <div className="ag-text t2">COMMUNICATION</div>
          </div>
        </div>
      </div>
    </section>
  );
}
