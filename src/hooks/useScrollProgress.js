import { useEffect, useRef, useState } from 'react';

export function useScrollProgress(options = { offsetTop: 0 }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // rect.top is 0 when the sticky container hits the top (assuming top: 0)
            // The element is pinned until rect.bottom <= windowHeight
            
            if (rect.top <= options.offsetTop && rect.bottom >= windowHeight) {
                const totalScroll = rect.height - windowHeight;
                const currentScroll = options.offsetTop - rect.top;
                let p = currentScroll / totalScroll;
                p = Math.max(0, Math.min(1, p));
                setProgress(p);
            } else if (rect.top > options.offsetTop) {
                setProgress(0);
            } else if (rect.bottom < windowHeight) {
                setProgress(1);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [options.offsetTop]);

  return { ref, progress };
}
