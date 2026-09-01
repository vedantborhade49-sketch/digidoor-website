import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const lineRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(lineRef.current, 
        { scaleX: 0 }, 
        { 
          scaleX: 1, 
          duration: 1.5, 
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 90%',
            once: true
          }
        }
      );
    }
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-container container">
        
        <div className="footer-top">
          <span className="footer-logo">DIGIDOOR</span>
          <h2 className="footer-tagline-main">WE BUILD PRESENCE.</h2>
          <Link to="/contact" className="footer-cta">
            LET'S TALK <span className="arrow">→</span>
          </Link>
        </div>

        <div className="footer-divider-wrapper">
          <div className="footer-divider" ref={lineRef}></div>
        </div>
        
        <div className="footer-nav">
          <Link to="/work">WORK</Link>
          <Link to="/expertise">EXPERTISE</Link>
          <Link to="/approach">APPROACH</Link>
          <Link to="/career">CAREER</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">© {new Date().getFullYear()} DIGIDOOR</span>
          <span className="footer-location">INDIA</span>
        </div>
        
      </div>
    </footer>
  );
}
