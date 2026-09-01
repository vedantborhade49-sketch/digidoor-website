import { useRef } from 'react';

export default function HomeIntro() {
  return (
    <section className="home-intro full-width-section bg-white text-navy noise-overlay relative-overflow">
      <div className="grid-overlay-light"></div>
      <div className="container" style={{ padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        
        <div className="home-intro-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          <div className="home-intro-top" style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8 }}>
            <span className="label text-blue">WHAT WE DO</span>
            <div style={{ height: '1px', background: 'var(--color-blue)', width: '60px' }}></div>
          </div>
          
          <h2 className="display-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            We connect real-world property<br />
            with digital attention.
          </h2>
          
          <div className="home-intro-body" style={{ maxWidth: '600px', marginTop: '1rem' }}>
            <p className="body" style={{ fontSize: '1.25rem' }}>
              Digidoor is a real-estate marketing and creative agency. We build brand strategies, creative campaigns and digital experiences that turn projects into destinations.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
