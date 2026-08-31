import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ConnectedDisciplines() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="connected-disciplines container section-padding">
      <div className="connected-header reveal-element">
        <span className="label">THE POWER IS IN THE CONNECTION</span>
        <h2 className="connected-heading">
          Strategy doesn't live in one room.<br />
          Neither does creativity.
        </h2>
        <p className="body connected-body">
          The strongest work happens when different disciplines work together from the beginning.
        </p>
      </div>

      <div className="connected-network reveal-element" style={{ transitionDelay: '0.2s' }}>
        <div className="network-item top">STRATEGY</div>
        <div className="network-line v1"></div>
        <div className="network-item center-left">CREATIVE</div>
        <div className="network-line h1"></div>
        <div className="network-item center">COMMUNICATION</div>
        <div className="network-line h2"></div>
        <div className="network-item center-right">DIGITAL</div>
        <div className="network-line v2"></div>
        <div className="network-item bottom-left">PERFORMANCE</div>
        <div className="network-line h3"></div>
        <div className="network-item bottom-right">TECHNOLOGY</div>
      </div>
    </section>
  );
}
