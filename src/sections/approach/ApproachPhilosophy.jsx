import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ApproachPhilosophy() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="approach-philosophy container section-padding">
      <div className="philosophy-inner reveal-element">
        <span className="label text-blue">OUR BELIEF</span>
        <h2 className="philosophy-heading">
          The best marketing<br />
          doesn't interrupt people.
          <br /><br />
          <span className="text-blue">It gives them a reason</span><br />
          <span className="text-blue">to move.</span>
        </h2>
      </div>
    </section>
  );
}
