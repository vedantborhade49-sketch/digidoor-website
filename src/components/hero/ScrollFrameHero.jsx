import { useRef, useEffect, useState } from 'react';
import { useFrameSequence } from './useFrameSequence';
import FrameSequenceCanvas from './FrameSequenceCanvas';
import HeroOverlay from './HeroOverlay';
import './Hero.css';

export default function ScrollFrameHero() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  const [wordIndex, setWordIndex] = useState(0);
  const loadingWords = ["MARKETING", "CONTENT", "DIGITAL", "STRATEGY", "CREATIVE"];
  
  const { imagesRef, isReady, loadProgress, totalFrames } = useFrameSequence();

  // Cycle words continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % loadingWords.length);
    }, 400);
    return () => clearInterval(interval);
  }, [loadingWords.length]);

  // Handle prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setIsReducedMotion(e.matches);
    // use addEventListener instead of addListener for modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  // Scroll logic calculation
  useEffect(() => {
    if (isReducedMotion) {
      // If reduced motion, we lock progress to 1 (end of sequence)
      setProgress(1);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // rect.top is 0 when the sticky container hits the top (assuming top: 0)
            // The element is pinned until rect.bottom <= windowHeight
            
            // For a 400vh container, rect.height is 4 * windowHeight
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                const totalScroll = rect.height - windowHeight;
                const currentScroll = -rect.top;
                let p = currentScroll / totalScroll;
                p = Math.max(0, Math.min(1, p));
                setProgress(p);
            } else if (rect.top > 0) {
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
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isReducedMotion]);

  // For reduced motion, we remove the 400vh scroll height and just make it a normal 100vh hero
  const containerStyle = isReducedMotion 
    ? { height: '100vh' } 
    : { height: '400vh' };

  return (
    <section ref={containerRef} className="scroll-frame-hero-container" style={containerStyle}>
      <div className="scroll-frame-hero-sticky">
        
        {/* Loading State or Canvas */}
        {!isReady ? (
          <div className="hero-loading" style={{ gap: '2rem', backgroundColor: '#F4F1EA' }}>
            <h1 className="display-heading" style={{ color: 'var(--color-navy)', margin: 0, textAlign: 'center', transition: 'opacity 0.2s' }}>
              {loadingWords[wordIndex]}
            </h1>
            <div className="hero-loading-bar-container" style={{ marginTop: 0 }}>
              <div 
                className="hero-loading-bar-fill" 
                style={{ transform: `scaleX(${loadProgress})` }}
              />
            </div>
          </div>
        ) : (
          <>
            <FrameSequenceCanvas imagesRef={imagesRef} progress={progress} />
            


            <HeroOverlay progress={progress} totalFrames={totalFrames} />
          </>
        )}
        
        {/* Subtle fade overlay to transition smoothly to the next section */}
        <div 
          className="hero-fade-out" 
          style={{ opacity: progress > 0.9 ? (progress - 0.9) / 0.1 : 0 }} 
        />
      </div>
    </section>
  );
}
