import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const capabilities = [
  { name: "BRAND STRATEGY", preview: "/images/work/project_03.png" },
  { name: "CREATIVE", preview: "/images/work/project_06.png" },
  { name: "COMMUNICATION", preview: "/images/work/project_02.png" },
  { name: "DIGITAL MARKETING", preview: "/images/work/project_04.png" },
  { name: "SOCIAL & CONTENT", preview: "/images/work/project_01.png" },
  { name: "PERFORMANCE", preview: "/images/work/project_06.png" },
  { name: "WEB & DIGITAL EXPERIENCES", preview: "/images/work/project_04.png" },
  { name: "PROJECT MARKETING", preview: "/images/work/project_01.png" }
];

export default function Capabilities() {
  const ref = useScrollReveal();
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section ref={ref} className="work-capabilities full-width-section bg-ice text-navy section-padding relative-overflow">
      <div className="container cap-layout">
        
        {/* Fixed Image on Left instead of Text */}
        <div className="cap-visual reveal-element desktop-only" style={{ position: 'relative', height: '100%', minHeight: '500px' }}>
          <div style={{ position: 'sticky', top: '150px', width: '100%', aspectRatio: '4/5', backgroundColor: 'var(--color-navy)', overflow: 'hidden' }}>
            {capabilities.map((cap, idx) => (
              <img 
                key={idx}
                src={cap.preview} 
                alt={`${cap.name} Preview`} 
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  opacity: hoveredIdx === idx ? 1 : 0,
                  transform: hoveredIdx === idx ? 'scale(1)' : 'scale(1.05)',
                  transition: 'opacity 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: 'none'
                }}
              />
            ))}
          </div>
        </div>

        <div className="cap-list reveal-element" style={{ transitionDelay: '0.15s' }}>
          {capabilities.map((cap, idx) => (
              <div 
              key={idx} 
              className="cap-list-item"
              onMouseEnter={() => setHoveredIdx(idx)}
              style={{ opacity: hoveredIdx === idx ? 1 : 0.4, transition: 'opacity 0.3s ease' }}
            >
              <span className="cap-num text-blue">{String(idx + 1).padStart(2, '0')}</span>
              <span className={`cap-name ${hoveredIdx === idx ? 'active' : ''}`}>{cap.name}</span>
              
              <div className={`cap-arrow ${hoveredIdx === idx ? 'active' : ''}`}>→</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
