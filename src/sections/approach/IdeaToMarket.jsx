import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function IdeaToMarket() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="idea-to-market full-width-section section-padding bg-navy text-white">
      <div className="container">
        <div className="idea-header reveal-element">
          <span className="label text-blue">FROM IDEA TO MARKET</span>
          <h2 className="idea-heading h2-major">
            One idea can become<br />
            an entire ecosystem.
          </h2>
        </div>

        <div className="idea-interactive-visual reveal-element" style={{ transitionDelay: '0.2s' }}>
          <div className="ii-node core-idea"></div>
          <div className="ii-path p1"></div>
          
          <div className="ii-node split-hub"></div>
          <div className="ii-path p2 left"></div>
          <div className="ii-path p2 right"></div>
          
          <div className="ii-node term-left"></div>
          <div className="ii-path p3 left-down"></div>
          <div className="ii-node term-right"></div>
          <div className="ii-path p3 right-down"></div>

          <div className="ii-labels">
            <span className="l-social">SOCIAL</span>
            <span className="l-digital">DIGITAL</span>
            <span className="l-content">CONTENT</span>
            <span className="l-website">WEBSITE</span>
            <span className="l-media">MEDIA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
