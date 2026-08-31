import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function WhyApproach() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="approach-why full-width-section section-padding bg-navy text-white">
      <div className="container approach-why-layout">
        <div className="approach-why-left reveal-element">
          <span className="label text-blue">WHY THE APPROACH MATTERS</span>
          <h2 className="approach-why-heading h2-major">
            Every project has<br />something to say.<br />
            <br />
            The challenge is finding<br />what people should hear.
          </h2>
        </div>
        
        <div className="approach-why-right reveal-element" style={{ transitionDelay: '0.15s' }}>
          <p className="body">
            Real estate is crowded.
          </p>
          <p className="body">
            Projects compete for attention across brands, campaigns, social platforms, search, media, content and increasingly complex buyer journeys.
          </p>
          <p className="body">
            Good marketing isn't about doing more.
          </p>
          <p className="body">
            It's about understanding what matters, finding the right story and putting it in the right place at the right moment.
          </p>
        </div>
      </div>
    </section>
  );
}
