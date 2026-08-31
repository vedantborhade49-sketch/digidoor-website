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
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate relative to the container
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    // Only track if we have a hovered item (performance)
    if (hoveredIdx !== null) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredIdx]);

  return (
    <section ref={ref} className="work-capabilities full-width-section bg-ice text-navy section-padding relative-overflow">
      <div className="container cap-layout" ref={containerRef}>
        
        <div className="cap-header reveal-element">
          <span className="label text-blue">WHAT WE BRING TO THE TABLE</span>
          <h2 className="cap-heading h2-normal">
            Different problems.<br />
            Different combinations.<br />
            One team.
          </h2>
        </div>

        <div className="cap-list reveal-element" style={{ transitionDelay: '0.15s' }}>
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="cap-list-item"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <span className="cap-num text-blue">{String(idx + 1).padStart(2, '0')}</span>
              <span className={`cap-name ${hoveredIdx === idx ? 'active' : ''}`}>{cap.name}</span>
              
              <div className={`cap-arrow ${hoveredIdx === idx ? 'active' : ''}`}>→</div>
            </div>
          ))}
        </div>

        {/* Floating Previews for Desktop */}
        <div className="cap-floating-previews desktop-only pointer-events-none">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className={`cap-preview-item ${hoveredIdx === idx ? 'visible' : ''}`}
              style={{
                transform: `translate(${mousePos.x + 20}px, ${mousePos.y - 100}px) rotate(${mousePos.x % 4 - 2}deg)`
              }}
            >
              <img src={cap.preview} alt={cap.name} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
