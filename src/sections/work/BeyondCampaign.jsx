import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function BeyondCampaign() {
  const ref = useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      // Calculate how far through the section we are
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Starts at 0 when top enters viewport, ends at 1 when bottom leaves
      const totalDist = rect.height + windowHeight;
      const currentPos = windowHeight - rect.top;
      
      let prog = currentPos / totalDist;
      prog = Math.max(0, Math.min(1, prog));
      
      // We want the line to draw down as we scroll through the center
      setScrollProgress(prog);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  const items = ['BRAND', 'CAMPAIGN', 'SOCIAL', 'CONTENT', 'DIGITAL', 'PERFORMANCE', 'EXPERIENCE'];
  
  // Calculate which items should be active based on scroll
  const activeIndex = Math.floor(scrollProgress * 2 * items.length);

  return (
    <section ref={ref} className="beyond-campaign full-width-section bg-navy text-white section-padding diagonal-cut-top relative-overflow">
      {/* Subtle blueprint grid background */}
      <div className="blueprint-grid" style={{ transform: `translateY(${scrollProgress * 20}px)` }}></div>

      <div className="container beyond-layout">
        
        <div className="beyond-content reveal-element">
          <span className="label text-blue">BEYOND THE CAMPAIGN</span>
          <h2 className="beyond-heading h2-major">
            A project isn't<br />
            just a campaign.<br />
            It's an ecosystem.
          </h2>
          <p className="body-large beyond-body" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '2rem' }}>
            A strong real-estate brand lives across every interaction.<br /><br />
            The idea becomes the identity.<br />
            The identity becomes the campaign.<br />
            The campaign becomes content, digital, media, performance and experience.
          </p>
        </div>

        <div className="beyond-visual reveal-element" style={{ transitionDelay: '0.2s' }}>
          <div className="ecosystem-list">
            <div className="eco-line-track">
               <div className="eco-line-fill" style={{ height: `${Math.min(100, scrollProgress * 150)}%` }}></div>
            </div>
            
            {items.map((item, idx) => (
              <div key={idx} className={`eco-item ${idx <= activeIndex ? 'active' : ''}`}>
                <span className="eco-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
