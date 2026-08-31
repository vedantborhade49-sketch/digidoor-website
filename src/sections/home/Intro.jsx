import { useEffect, useRef } from 'react';
import './Intro.css';

export default function Intro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-element');
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="intro-section container section">
      <div className="intro-content">
        <div className="reveal-element intro-label-wrapper">
          <span className="label intro-label">THE DIGIDOOR WAY</span>
          <div className="intro-blue-line"></div>
        </div>
        
        <h2 className="reveal-element intro-heading h1">
          Real estate is more than<br />a property.
        </h2>
        <h2 className="reveal-element intro-heading-accent h2">
          It's a story<br />waiting to be told.
        </h2>

        <div className="reveal-element intro-body-wrapper">
          <p className="body intro-body">
            Digidoor brings strategy, creativity and digital performance together to build real estate brands that people notice, remember and act on.
          </p>
        </div>
      </div>
    </section>
  );
}
