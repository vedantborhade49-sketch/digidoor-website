import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CinematicFooter = () => {
  const containerRef = useRef(null);
  const typographyRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  
  const buildingRef = useRef(null);
  const overlayRef = useRef(null);
  const ctaTextRef = useRef(null);
  const svgGridRef = useRef(null);
  const logoPathRef = useRef(null);

  const coordsRef = useRef(null);

  useEffect(() => {
    // Cinematic Sequence (Pinned)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4000', // 4000px of scroll for the whole sequence
        scrub: 1,
        pin: true,
      }
    });

    // 1. Typography Sequence
    tl.to(line1Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(line2Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(line3Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(line4Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(typographyRef.current, { opacity: 0, duration: 1, delay: 0.5 }); // Fade out text

    // 2. Bring in the Building (last frame of hero)
    tl.to(buildingRef.current, { opacity: 1, duration: 1 })
      .to(overlayRef.current, { opacity: 1, duration: 1 }) // Lights turn on / billboard overlay
      .to(ctaTextRef.current, { opacity: 1, y: 0, duration: 1 }); // "LET'S BUILD PRESENCE"

    // 3. Camera pulls away
    tl.to(ctaTextRef.current, { opacity: 0, duration: 0.5 }) // Fade out CTA text first
      .to(overlayRef.current, { opacity: 0, duration: 0.5 }, '<') // Fade out overlay
      .to(buildingRef.current, { scale: 0.1, opacity: 0.5, duration: 2 }); // Zoom out building

    // 4. Grid lines assemble into Digidoor Logo
    tl.to(svgGridRef.current, { opacity: 1, duration: 0.5 }, '-=1')
      .fromTo(logoPathRef.current, 
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 2 }
      )
      .to(logoPathRef.current, { fill: '#ffffff', duration: 1 })
      .to(buildingRef.current, { opacity: 0, duration: 0.5 }, '<'); // Completely hide building

    // Editorial Footer Coordinate System Animation
    ScrollTrigger.create({
      trigger: coordsRef.current,
      start: 'top 80%',
      onEnter: () => {
        document.querySelectorAll('.coord-bar-fill').forEach(el => {
          el.style.width = '100%';
        });
      },
      onLeaveBack: () => {
        document.querySelectorAll('.coord-bar-fill').forEach(el => {
          el.style.width = '0%';
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <section ref={containerRef} className="cinematic-footer-container">
        
        {/* Step 1: Typography */}
        <div ref={typographyRef} className="footer-typography">
          <div className="footer-line" ref={line1Ref}>THE PROPERTY</div>
          <div className="footer-line" ref={line2Ref}>HAS A PRESENCE.</div>
          <div className="footer-line spacer" ref={line3Ref}>NOW LET'S</div>
          <div className="footer-line highlight" ref={line4Ref}>BUILD YOURS.</div>
        </div>

        {/* Step 2 & 3: Building and Billboard */}
        <div className="footer-building-wrapper">
          <img 
            ref={buildingRef} 
            src="/assets/hero/frames_compressed/frame_0419.webp" 
            alt="The Last Landmark" 
            className="footer-building"
          />
          <div ref={overlayRef} className="footer-billboard-overlay">
            {/* We position a glowing box right where the billboard is on the 3D building */}
            <div className="billboard-glow"></div>
            <h2 ref={ctaTextRef} className="billboard-cta"></h2>
          </div>
        </div>

        {/* Step 4: Grid and Logo */}
        <div ref={svgGridRef} className="footer-svg-logo-wrapper">
          <svg viewBox="0 0 800 300" className="footer-logo-svg">
            <path 
              ref={logoPathRef}
              d="M150,50 L250,50 C300,50 330,80 330,150 C330,220 300,250 250,250 L150,250 Z M200,100 L200,200 L240,200 C270,200 280,180 280,150 C280,120 270,100 240,100 Z M400,50 L500,50 C550,50 580,80 580,150 C580,220 550,250 500,250 L400,250 Z M450,100 L450,200 L490,200 C520,200 530,180 530,150 C530,120 520,100 490,100 Z"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>

      {/* Step 5: Editorial Footer */}
      <footer className="editorial-footer">
        <div className="container editorial-footer-inner">
          
          <div className="editorial-top">
            <div className="editorial-brand">
              <h3>DIGIDOOR</h3>
              <p>WE CONNECT REAL-WORLD<br/>PROPERTY WITH DIGITAL ATTENTION.</p>
            </div>
            
            <div className="editorial-links">
              <div className="link-column">
                <Link to="/work">WORK</Link>
                <Link to="/expertise">EXPERTISE</Link>
                <Link to="/contact">CONTACT</Link>
              </div>
              <div className="link-column">
                <Link to="/approach">APPROACH</Link>
                <Link to="/career">CAREER</Link>
              </div>
            </div>
          </div>

          <div className="editorial-middle">
            <h2 className="have-a-project">HAVE A PROJECT<br/>IN MIND?</h2>
            <a href="mailto:hello@digidoor.com" className="massive-email">
              HELLO@DIGIDOOR.COM <span className="arrow">→</span>
            </a>
          </div>

          <div className="editorial-bottom">
            <div className="footer-meta">
              <p>DIGIDOOR / 2026</p>
              <p>REAL ESTATE MARKETING</p>
              <p>CREATIVE / DIGITAL / VISUAL</p>
            </div>
            
            <div className="footer-coords" ref={coordsRef}>
              <h4>PROJECT STATUS</h4>
              <div className="coord-row"><span>IDENTITY</span> <div className="coord-bar"><div className="coord-bar-fill"></div></div> <span>100%</span></div>
              <div className="coord-row"><span>VISIBILITY</span> <div className="coord-bar"><div className="coord-bar-fill"></div></div> <span>100%</span></div>
              <div className="coord-row"><span>DIGITAL</span> <div className="coord-bar"><div className="coord-bar-fill"></div></div> <span>100%</span></div>
              <div className="coord-row"><span>PRESENCE</span> <div className="coord-bar"><div className="coord-bar-fill"></div></div> <span>100%</span></div>
            </div>
          </div>

          <div className="footer-final">
            <h2>SEE YOU AT THE NEXT LANDMARK.</h2>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="scroll-top-btn">
              SCROLL ↑
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CinematicFooter;
