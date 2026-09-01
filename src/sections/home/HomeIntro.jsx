import { useRef } from 'react';
import RevealText from '../../components/ui/RevealText';
import SectionEyebrow from '../../components/ui/SectionEyebrow';

export default function HomeIntro() {
  return (
    <section className="home-intro full-width-section bg-white text-navy noise-overlay relative-overflow">
      <div className="grid-overlay-light"></div>
      <div className="container" style={{ padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        
        <div className="home-intro-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          <SectionEyebrow number="01" title="WHAT WE DO" className="mb-8" />
          
          <RevealText 
            elementType="h2" 
            className="display-heading mb-6" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em' }}
            text={[
              <span key="1">We connect real-world <span className="accent-serif text-blue">property</span></span>,
              <span key="2">with digital attention.</span>
            ]} 
          />
          
          <div className="home-intro-body" style={{ maxWidth: '800px', marginTop: '3rem' }}>
            <RevealText 
              elementType="p" 
              className="body" 
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.4, color: 'var(--color-navy)', opacity: 0.8 }}
              delay={0.2}
              text={[
                <span key="1">Digidoor is a real-estate marketing and <span className="accent-serif text-blue">creative</span> agency.</span>,
                <span key="2">We build brand strategies, campaigns and digital</span>,
                <span key="3">experiences that turn projects into <span className="accent-serif">destinations.</span></span>
              ]}
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
