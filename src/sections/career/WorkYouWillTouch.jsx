import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function WorkYouWillTouch() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="work-touch-section container section-padding">
      <div className="work-touch-header reveal-element">
        <span className="label">YOUR WORK COULD START WITH...</span>
      </div>
      
      <div className="work-touch-typography">
        <div className="work-touch-row reveal-element left">
          <span className="h1-massive outline">A NEW RESIDENTIAL</span> <span className="h1-massive solid">LAUNCH</span>
        </div>
        <div className="work-touch-row reveal-element right" style={{ transitionDelay: '0.1s' }}>
          <span className="h1-massive solid blue">A BRAND THAT NEEDS</span>
        </div>
        <div className="work-touch-row reveal-element right" style={{ transitionDelay: '0.15s' }}>
          <span className="h1-massive outline">REPOSITIONING</span>
        </div>
        <div className="work-touch-row reveal-element left" style={{ transitionDelay: '0.2s' }}>
          <span className="h1-massive solid">A DIGITAL CAMPAIGN</span>
        </div>
        <div className="work-touch-row reveal-element right" style={{ transitionDelay: '0.25s' }}>
          <span className="h1-massive outline">A NEW</span> <span className="h1-massive solid">WEBSITE</span>
        </div>
        <div className="work-touch-row reveal-element left" style={{ transitionDelay: '0.3s' }}>
          <span className="h1-massive outline">A COMPLETE</span>
        </div>
        <div className="work-touch-row reveal-element left" style={{ transitionDelay: '0.35s' }}>
          <span className="h1-massive solid blue">PROJECT LAUNCH</span>
        </div>
      </div>
    </section>
  );
}
