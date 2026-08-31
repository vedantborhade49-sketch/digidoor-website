import { useState, useEffect } from 'react';

export function useScrollProgress(containerRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            
            // endScroll is the maximum distance the container can be scrolled
            // before it leaves the viewport (assuming sticky inner container)
            const endScroll = rect.height - window.innerHeight; 
            const scrolled = -rect.top;
            
            if (scrolled <= 0) {
              setProgress(0);
            } else if (scrolled >= endScroll) {
              setProgress(1);
            } else {
              setProgress(scrolled / endScroll);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initialize
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [containerRef]);

  return progress;
}
