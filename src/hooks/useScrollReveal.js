import { useEffect, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      options
    );

    const elements = Array.from(ref.current?.querySelectorAll('.reveal-element') || []);
    if (ref.current?.classList.contains('reveal-element')) {
      elements.push(ref.current);
    }

    if (elements.length > 0) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements.length > 0) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
}
