import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function IdeaToMarket() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="idea-to-market container section-padding">
      <div className="idea-header reveal-element">
        <span className="label">FROM IDEA TO MARKET</span>
        <h2 className="idea-heading">
          One idea can become<br />
          an entire ecosystem.
        </h2>
      </div>

      <div className="idea-ecosystem reveal-element" style={{ transitionDelay: '0.2s' }}>
        <div className="eco-level eco-level-1">
          <div className="eco-node highlight">BIG IDEA</div>
        </div>
        <div className="eco-path straight"></div>
        <div className="eco-level eco-level-2">
          <div className="eco-node outline">BRAND LANGUAGE</div>
          <div className="eco-node outline">CAMPAIGN</div>
        </div>
        <div className="eco-path split-3"></div>
        <div className="eco-level eco-level-3">
          <div className="eco-node">SOCIAL</div>
          <div className="eco-node">CONTENT</div>
          <div className="eco-node">WEBSITE</div>
          <div className="eco-node">MEDIA</div>
        </div>
        <div className="eco-path funnel"></div>
        <div className="eco-level eco-level-4">
          <div className="eco-node highlight">LEADS</div>
        </div>
        <div className="eco-path straight-dashed"></div>
        <div className="eco-level eco-level-5">
          <div className="eco-node blue">LEARNING</div>
        </div>
      </div>
    </section>
  );
}
