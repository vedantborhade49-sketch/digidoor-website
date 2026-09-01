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

  const ecosystemItems = [
    { name: 'BRAND', image: '/images/work/project_03.png' },
    { name: 'CAMPAIGN', image: '/images/work/project_02.png' },
    { name: 'SOCIAL', image: '/images/work/project_01.png' },
    { name: 'CONTENT', image: '/images/work/project_06.png' },
    { name: 'DIGITAL', image: '/images/work/project_04.png' },
    { name: 'PERFORMANCE', image: '/images/work/project_05.png' },
    { name: 'EXPERIENCE', image: '/images/work/project_03.png' }
  ];
  
  // Calculate which items should be active based on scroll
  const activeIndex = Math.min(ecosystemItems.length - 1, Math.floor(scrollProgress * 2 * ecosystemItems.length));

  return (
    <section ref={ref} className="beyond-campaign full-width-section bg-navy text-white section-padding diagonal-cut-top relative-overflow">
      {/* Subtle blueprint grid background */}
      <div className="grid-overlay-dark" style={{ transform: `translateY(${scrollProgress * 20}px)` }}></div>

      <div className="container beyond-layout">
        
        <div className="beyond-content reveal-element">
          <span className="label text-blue">BEYOND THE CAMPAIGN</span>
          <h2 className="beyond-heading h2-major">
            A project isn't<br />
            just a campaign.<br />
            It's an ecosystem.
          </h2>
          <p className="body-large beyond-body" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '2rem', marginBottom: '3rem' }}>
            A strong real-estate brand lives across every interaction.<br /><br />
            The idea becomes the identity.<br />
            The identity becomes the campaign.<br />
            The campaign becomes content, digital, media, performance and experience.
          </p>

          <div className="ecosystem-preview desktop-only" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '4px' }}>
            {ecosystemItems.map((item, idx) => (
              <img 
                key={idx}
                src={item.image}
                alt={item.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: activeIndex === idx ? 1 : 0,
                  transform: activeIndex === idx ? 'scale(1)' : 'scale(1.05)',
                  transition: 'opacity 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: 'none'
                }}
              />
            ))}
          </div>
        </div>

        <div className="beyond-visual reveal-element" style={{ transitionDelay: '0.2s' }}>
          <div className="ecosystem-list">
            <div className="eco-line-track">
               <div className="eco-line-fill" style={{ height: `${Math.min(100, scrollProgress * 150)}%` }}></div>
            </div>
            
            {ecosystemItems.map((item, idx) => (
              <div key={idx} className={`eco-item ${idx <= activeIndex ? 'active' : ''}`}>
                <span className="eco-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
