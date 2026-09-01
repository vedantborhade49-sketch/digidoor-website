import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useState, useEffect } from 'react';
import RevealText from '../../components/ui/RevealText';
import SectionEyebrow from '../../components/ui/SectionEyebrow';

export default function ApproachHero() {
  const ref = useScrollReveal();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expandProgress = Math.min(1, scrollPos / 300);
  
  return (
    <section ref={ref} className="approach-hero full-width-section bg-white text-navy section-padding-lg relative-overflow">
      <div className="grid-overlay-light"></div>
      <div className="arch-detail label tracking-wide" style={{ position: 'absolute', top: '120px', left: '5%' }}>01 / 07<br/>APPROACH</div>
      <div className="arch-detail label tracking-wide" style={{ position: 'absolute', top: '120px', right: '5%' }}>SCROLL TO EXPLORE</div>
      
      <div className="container approach-hero-layout">
        
        <div className="approach-hero-content">
          <SectionEyebrow number="01" title="APPROACH" />
          <RevealText 
            elementType="h1" 
            className="display-heading approach-hero-heading" 
            style={{ marginTop: '2rem' }}
            text={[
              <span key="1">We don't start</span>,
              <span key="2">with the <span className="accent-serif text-blue">answer.</span></span>
            ]}
          />
        </div>

        <div className="approach-hero-visual reveal-element" style={{ transitionDelay: '0.2s' }}>
          <div className="editorial-crop-wrapper" style={{ clipPath: `inset(${15 - expandProgress * 15}% ${15 - expandProgress * 15}%)` }}>
            <img 
              src="/images/approach/hero.png" 
              alt="Architectural plans and creative moodboard" 
              className="parallax-image"
              style={{ transform: `scale(${1.1 - expandProgress * 0.1}) translateY(${scrollPos * -0.05}px)` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
