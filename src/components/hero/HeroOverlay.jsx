export default function HeroOverlay({ progress, totalFrames }) {

  // 75% - 100%: "CREATIVE / DIGITAL / EXPERIENCE"
  let outroOpacity = 0;
  if (progress > 0.75 && progress < 0.85) {
    outroOpacity = (progress - 0.75) / 0.10;
  } else if (progress >= 0.85) {
    outroOpacity = 1;
  }
  
  // Scroll Indicator (only visible at the very beginning)
  let indicatorOpacity = progress > 0.05 ? 0 : 1 - (progress / 0.05);
  
  // Current frame number calculation
  const currentFrameNum = Math.min(totalFrames, Math.max(1, Math.floor(progress * totalFrames) + 1));
  const formattedCurrent = String(currentFrameNum).padStart(2, '0');
  const formattedTotal = String(totalFrames).padStart(2, '0');

  return (
    <div className="hero-overlay container" style={{ pointerEvents: 'none' }}>
      
      {/* Outro Narrative */}
      <div 
        className="hero-text-block outro-text"
        style={{ 
          opacity: outroOpacity, 
          willChange: 'opacity' 
        }}
      >
        <h1 className="display-heading text-center" style={{ margin: '0 auto' }}>
          CREATIVE.<br/>
          DIGITAL.<br/>
          EXPERIENCE.
        </h1>
      </div>

      {/* Scroll to Enter Indicator */}
      <div 
        className="hero-scroll-indicator"
        style={{ 
          opacity: indicatorOpacity, 
          transition: 'opacity 0.2s ease-out' 
        }}
      >
        <span className="label">SCROLL TO ENTER</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="scroll-arrow">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>

      {/* Frame Progress Line */}
      <div className="hero-progress-container">
        <span className="progress-number">{formattedCurrent}</span>
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
        <span className="progress-number">{formattedTotal}</span>
      </div>
      
    </div>
  );
}
