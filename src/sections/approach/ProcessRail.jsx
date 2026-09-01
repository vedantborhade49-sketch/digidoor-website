import { useEffect, useState } from 'react';


const stages = [
  { id: 'understand', num: '01', title: 'UNDERSTAND' },
  { id: 'define', num: '02', title: 'DEFINE' },
  { id: 'strategize', num: '03', title: 'STRATEGIZE' },
  { id: 'create', num: '04', title: 'CREATE' },
  { id: 'communicate', num: '05', title: 'COMMUNICATE' },
  { id: 'activate', num: '06', title: 'ACTIVATE' },
  { id: 'measure', num: '07', title: 'MEASURE' }
];

export default function ProcessRail() {
  const [activeId, setActiveId] = useState('understand');
  const [isRailVisible, setIsRailVisible] = useState(false);

  useEffect(() => {
    // Show rail only after hero section
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setIsRailVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Setup observer for sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px' });

    stages.forEach(stage => {
      const el = document.getElementById(stage.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`process-rail desktop-only ${isRailVisible ? 'visible' : ''}`}>
      <div className="process-rail-inner">
        {stages.map((stage) => {
          const isActive = activeId === stage.id;
          return (
            <div key={stage.id} className={`rail-item ${isActive ? 'active' : ''}`}>
              <span className="rail-num">{stage.num}</span>
              <span className="rail-line"></span>
              <span className="rail-title">{stage.title}</span>
              <div className="rail-dot"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
