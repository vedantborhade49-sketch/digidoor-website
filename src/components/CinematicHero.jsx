import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useImageSequence } from '../hooks/useImageSequence';
import ScrollSequence from './ScrollSequence';
import './CinematicHero.css';

const narrativeSequence = [
  "Real Estate.",
  "Architecture.",
  "Property Marketing.",
  "Campaign.",
  "Digital Experience.",
  "DIGIDOOR."
];

export default function CinematicHero() {
  const { ref: containerRef, progress } = useScrollProgress();
  const { images, progress: loadProgress, isReady } = useImageSequence();

  // Progress logic for narrative sequence
  // The door sequence is roughly 0 to 1.
  // We want the text to sequence as the door opens and we move through.
  
  // Wait until the door starts opening (around progress 0.2)
  // Text sequences from 0.2 to 0.8
  const textProgressStart = 0.2;
  const textProgressEnd = 0.8;
  const sequenceLength = narrativeSequence.length;
  
  let currentWordIndex = -1;
  let textOpacity = 0;
  
  if (progress > textProgressStart && progress < textProgressEnd) {
    const normalizedProgress = (progress - textProgressStart) / (textProgressEnd - textProgressStart);
    currentWordIndex = Math.floor(normalizedProgress * sequenceLength);
    
    // Calculate fade in/out for each word
    const wordProgress = (normalizedProgress * sequenceLength) % 1;
    // Fade in 0-0.2, stay 0.2-0.8, fade out 0.8-1.0
    if (wordProgress < 0.2) textOpacity = wordProgress / 0.2;
    else if (wordProgress > 0.8) textOpacity = 1 - ((wordProgress - 0.8) / 0.2);
    else textOpacity = 1;
  } else if (progress >= textProgressEnd) {
    // Keep the final word "DIGIDOOR" on screen for a bit before fading out completely
    currentWordIndex = sequenceLength - 1;
    if (progress < 0.95) {
      textOpacity = 1;
    } else {
      textOpacity = Math.max(0, 1 - (progress - 0.95) / 0.05);
    }
  }

  const scrollIndicatorOpacity = progress > 0.05 ? 0 : 1 - (progress / 0.05);

  return (
    <section ref={containerRef} className="cinematic-hero-container">
      <div className="cinematic-hero-sticky">
        
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

        {isReady && currentWordIndex >= 0 && (
          <div 
            className="cinematic-hero-content container"
            style={{ 
              opacity: textOpacity, 
              willChange: 'opacity',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              pointerEvents: 'none'
            }}
          >
            <h1 className="display-heading cinematic-heading text-center">
              {narrativeSequence[currentWordIndex]}
            </h1>
          </div>
        )}
        
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
        
        <div className="cinematic-hero-fade"></div>
      </div>
    </section>
  );
}
