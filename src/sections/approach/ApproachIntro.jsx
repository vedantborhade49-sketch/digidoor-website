import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ApproachIntro() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="approach-intro full-width-section section-padding bg-ice text-navy">
      <div className="container approach-intro-inner">
        <div className="reveal-element">
          <span className="label text-blue">THE DIGIDOOR METHOD</span>
        </div>
        <h2 className="reveal-element approach-intro-heading h2-normal" style={{ transitionDelay: '0.1s' }}>
          Understand first.<br />
          Create second.<br />
          Execute with purpose.
        </h2>
        <p className="reveal-element body approach-intro-body" style={{ transitionDelay: '0.2s' }}>
          We bring strategy, creative, communication, digital and performance into the same conversation.<br /><br />
          That means ideas don't exist in isolation.<br /><br />
          They are built to work.
        </p>
      </div>
    </section>
  );
}
