import { useEffect, useRef } from 'react';
import './WhatWeDo.css';

const capabilities = [
  {
    title: 'BRAND STRATEGY',
    description: 'Positioning, identity and communication systems built for real estate brands.',
  },
  {
    title: 'DIGITAL MARKETING',
    description: 'Full-funnel digital campaigns designed to create visibility, engagement and demand.',
  },
  {
    title: 'PERFORMANCE',
    description: 'Data-driven campaigns focused on qualified leads, conversions and measurable growth.',
  },
  {
    title: 'CREATIVE & CONTENT',
    description: 'Campaign concepts, visual storytelling, social content and creative systems that make projects stand out.',
  },
  {
    title: 'WEB EXPERIENCES',
    description: 'High-performance websites and landing experiences designed to turn attention into action.',
  },
  {
    title: 'PROJECT LAUNCHES',
    description: 'End-to-end marketing strategies for taking new developments to market.',
  }
];

export default function WhatWeDo() {
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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
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
    <section ref={sectionRef} className="what-we-do-section container section">
      <div className="what-we-do-layout">
        
        {/* Left Column: Heading */}
        <div className="what-we-do-header reveal-element">
          <span className="label what-we-do-label">WHAT WE DO</span>
          <h2 className="h2 what-we-do-heading">
            We turn real estate<br />into brands people<br />want to be part of.
          </h2>
        </div>

        {/* Right Column: Capabilities */}
        <div className="what-we-do-list">
          {capabilities.map((cap, index) => (
            <div key={index} className="capability-item reveal-element" style={{ transitionDelay: `${0.1 + index * 0.1}s` }}>
              <div className="capability-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="capability-content">
                <h3 className="h3 capability-title">{cap.title}</h3>
                <p className="body capability-description">{cap.description}</p>
              </div>
              <div className="capability-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
