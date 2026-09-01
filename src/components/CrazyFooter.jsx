import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CrazyFooter.css';

gsap.registerPlugin(ScrollTrigger);

export default function CrazyFooter() {
  const footerRef = useRef(null);
  const marqueeRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    // Scroll velocity skew effect on marquee
    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(marqueeRef.current, "skewX", "deg"),
        clamp = gsap.utils.clamp(-20, 20);

    const scrollTriggerInstance = ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew)
          });
        }
      }
    });

    // Magnetic effect for email container
    const email = emailRef.current;
    const container = email?.parentElement;
    
    const handleMouseMove = (e) => {
      if (!email) return;
      const rect = email.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(email, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.5,
        ease: "power2.out"
      });
    };
    
    const handleMouseLeave = () => {
      if (!email) return;
      gsap.to(email, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
      });
    };
    
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <footer className="crazy-footer" ref={footerRef}>
      <div className="crazy-marquee-container">
        <div className="crazy-marquee" ref={marqueeRef}>
          <div className="crazy-marquee-inner">
            <span>LET'S BUILD PRESENCE — LET'S BUILD PRESENCE — </span>
            <span>LET'S BUILD PRESENCE — LET'S BUILD PRESENCE — </span>
          </div>
        </div>
      </div>
      
      <div className="crazy-footer-main container">
        <div className="crazy-contact-wrapper">
          <div className="crazy-contact" ref={emailRef}>
            <a href="mailto:hello@digidoor.com" className="crazy-email">
              HELLO<br/>@DIGIDOOR<br/>.COM
            </a>
          </div>
        </div>
        
        <div className="crazy-links-grid">
          <div className="crazy-col">
            <h4 className="crazy-col-title">NAVIGATION</h4>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/work">OUR WORK</Link></li>
              <li><Link to="/approach">OUR APPROACH</Link></li>
              <li><Link to="/career">CAREER</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          
          <div className="crazy-col">
            <h4 className="crazy-col-title">SOCIAL</h4>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
            </ul>
          </div>
          
          <div className="crazy-col">
            <h4 className="crazy-col-title">CALL US</h4>
            <ul>
              <li><a href="tel:+917607607279">+91 760 760 7279</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="crazy-footer-bottom container">
        <div className="crazy-branding">
          <span className="crazy-logo">DIGIDOOR</span>
          <span className="crazy-tagline">Real estate marketing, reimagined.</span>
        </div>
        <div className="crazy-legal">
          <span>© {new Date().getFullYear()} DIGIDOOR</span>
          <Link to="#">PRIVACY</Link>
          <Link to="#">TERMS</Link>
        </div>
      </div>
    </footer>
  );
}
