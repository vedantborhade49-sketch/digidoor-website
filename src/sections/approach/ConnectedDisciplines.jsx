import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ConnectedDisciplines() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="connected-disciplines full-width-section section-padding bg-offwhite text-navy">
      <div className="container">
        <div className="connected-header reveal-element">
          <span className="label text-blue">THE POWER IS IN THE CONNECTION</span>
          <h2 className="connected-heading h2-major">
            Strategy doesn't live in one room.<br />
            Neither does creativity.
          </h2>
          <p className="body connected-body">
            The strongest work happens when different disciplines work together from the beginning.
          </p>
        </div>

        <div className="connected-diagram reveal-element" style={{ transitionDelay: '0.2s' }}>
          <div className="diagram-row">
            <div className="diagram-node">STRATEGY</div>
          </div>
          <div className="diagram-vert-line"></div>
          <div className="diagram-row main-axis">
            <div className="diagram-node">CREATIVE</div>
            <div className="diagram-horiz-line"></div>
            <div className="diagram-node center-hub">DIGIDOOR</div>
            <div className="diagram-horiz-line"></div>
            <div className="diagram-node">DIGITAL</div>
          </div>
          <div className="diagram-vert-line"></div>
          <div className="diagram-row">
            <div className="diagram-node">PERFORMANCE</div>
          </div>
          <div className="diagram-vert-line"></div>
          <div className="diagram-row">
            <div className="diagram-node">COMMUNICATION</div>
          </div>
        </div>
      </div>
    </section>
  );
}
