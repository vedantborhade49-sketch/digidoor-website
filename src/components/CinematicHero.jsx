import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useImageSequence } from '../hooks/useImageSequence';
import ScrollSequence from './ScrollSequence';
import './CinematicHero.css';

export default function CinematicHero() {
  const containerRef = useRef(null);
  const progress = useScrollProgress(containerRef);
  const { images, progress: loadProgress, isReady } = useImageSequence();

  // Typography Timing Logic
  // 0-20% hidden
  // 20-45% gradually appears
  // 45-75% fully visible
  // 75-100% gradually fades/moves away
  let textOpacity = 0;
  if (progress > 0.2 && progress <= 0.45) {
    textOpacity = (progress - 0.2) / 0.25;
  } else if (progress > 0.45 && progress <= 0.75) {
    textOpacity = 1;
  } else if (progress > 0.75) {
    textOpacity = Math.max(0, 1 - (progress - 0.75) / 0.25);
  }

  let textTranslate = 20; // start slightly below
  if (progress > 0.2 && progress <= 0.45) {
    textTranslate = 20 - ((progress - 0.2) / 0.25) * 20;
  } else if (progress > 0.45 && progress <= 0.75) {
    textTranslate = 0;
  } else if (progress > 0.75) {
    textTranslate = -((progress - 0.75) / 0.25) * 40; // moves up as it fades out
  } else {
    textTranslate = 20;
  }

  // Scroll Indicator Timing (disappears > 0.05)
  const scrollIndicatorOpacity = progress > 0.05 ? 0 : 1 - (progress / 0.05);

  return (
    <section ref={containerRef} className="cinematic-hero-container">
      <div className="cinematic-hero-sticky">
        
        {/* Image Sequence Canvas Engine */}
        <div className="cinematic-hero-canvas-wrapper">
          {isReady ? (
            <ScrollSequence images={images} progress={progress} />
          ) : (
            <div className="cinematic-hero-loading">
              <span className="label" style={{ color: 'var(--color-navy)' }}>DIGIDOOR</span>
              <h2 className="h2" style={{ color: 'var(--color-navy)' }}>
                LOADING {Math.round(loadProgress * 100)}%
              </h2>
            </div>
          )}
        </div>

        {/* Hero Typography Overlay */}
        {isReady && (
          <div 
            className="cinematic-hero-content container"
            style={{ 
              opacity: textOpacity, 
              transform: `translateY(${textTranslate}px)`,
              willChange: 'opacity, transform'
            }}
          >
            <span className="label cinematic-label">DIGIDOOR</span>
            <h1 className="display-heading cinematic-heading">
              Marketing spaces<br />that move people.
            </h1>
            <p className="body cinematic-subtitle">
              Strategy, creativity and digital experiences<br />built for real estate.
            </p>
          </div>
        )}
        
        {/* Scroll Indicator */}
        {isReady && (
          <div 
            className="cinematic-scroll-indicator"
            style={{ opacity: scrollIndicatorOpacity, transition: 'opacity 0.2s ease-out' }}
          >
            <span className="label">SCROLL TO EXPLORE</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="scroll-arrow">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        )}
        
        {/* Gradient fade to blend with the subsequent page sections */}
        <div className="cinematic-hero-fade"></div>
      </div>
    </section>
  );
}
