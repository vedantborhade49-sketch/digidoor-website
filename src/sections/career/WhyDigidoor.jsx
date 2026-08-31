import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function WhyDigidoor() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="career-why container section-padding">
      <div className="career-why-layout">
        <div className="career-why-left reveal-element">
          <span className="label">WHY DIGIDOOR</span>
          <h2 className="career-why-heading">
            We don't just market<br />spaces.
            <br /><br />
            We create reasons<br />to care about them.
          </h2>
        </div>
        
        <div className="career-why-right reveal-element" style={{ transitionDelay: '0.15s' }}>
          <div className="career-why-divider"></div>
          <p className="body">
            Real estate is one of the most visual, emotional and competitive categories in marketing.
          </p>
          <p className="body">
            At Digidoor, we bring strategy, creativity, communication and technology together to turn properties into brands people remember.
          </p>
          <p className="body">
            That means every brief is different.
          </p>
          <p className="body">
            One day you're building a campaign for a new residential development. The next, you're shaping a digital experience, creating a launch campaign, developing a social identity or optimizing performance for thousands of potential buyers.
          </p>
        </div>
      </div>
    </section>
  );
}
