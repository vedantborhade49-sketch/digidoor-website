import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Culture() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="culture-section container section-padding">
      <div className="culture-inner">
        <div className="culture-header reveal-element">
          <span className="label">LIFE AT DIGIDOOR</span>
          <h2 className="culture-heading">
            Serious about the work.<br />
            Not too serious about ourselves.
          </h2>
        </div>
        
        <div className="culture-body reveal-element" style={{ transitionDelay: '0.15s' }}>
          <p className="body">
            We're building a team of people who are curious, collaborative and ambitious about the work they create.
          </p>
          <p className="body">
            Different backgrounds. Different skills. Different ways of thinking.
          </p>
          <p className="body">
            That's what makes the work better.
          </p>
        </div>
      </div>
    </section>
  );
}
