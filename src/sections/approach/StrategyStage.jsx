import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function StrategyStage() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.3 });
  const drawProgress = Math.min(1, progress * 1.5);

  return (
    <section id="strategize" ref={ref} className="stage-section full-width-section bg-white text-navy">
      <div className="container stage-layout">
        
        <div className="stage-content">
          <span className="label text-blue">03 / STRATEGIZE</span>
          <h2 className="h2-normal stage-heading">
            Turn insight<br/>into direction.
          </h2>
          <div className="body stage-body">
            <p>Positioning, messaging, channel strategy, campaign architecture and the path from attention to action.</p>
            <p>The strategy becomes the filter for every decision that follows.</p>
          </div>
        </div>

        <div className="stage-visual">
          <svg viewBox="0 0 400 400" className="approach-svg">
            <pattern id="grid-strategy" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-navy)" strokeWidth="0.5" opacity="0.1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-strategy)" />

            <g>
              <text x="200" y="60" textAnchor="middle" className="svg-label">INSIGHT</text>
              
              <line x1="200" y1="70" x2="200" y2={70 + 40 * Math.min(1, drawProgress / 0.2)} stroke="var(--color-blue)" strokeWidth="1" />
              
              <circle cx="200" cy="110" r="3" fill="var(--color-blue)" opacity={drawProgress > 0.2 ? 1 : 0} />
              <text x="200" y="130" textAnchor="middle" className="svg-label" opacity={drawProgress > 0.2 ? 1 : 0}>POSITIONING</text>
              
              <line x1="200" y1="140" x2="200" y2={140 + 40 * Math.min(1, Math.max(0, drawProgress - 0.2) / 0.2)} stroke="var(--color-blue)" strokeWidth="1" />
              
              <circle cx="200" cy="180" r="4" fill="var(--color-blue)" opacity={drawProgress > 0.4 ? 1 : 0} />
              <text x="200" y="205" textAnchor="middle" className="svg-label font-bold" opacity={drawProgress > 0.4 ? 1 : 0}>CORE IDEA</text>

              <line x1="200" y1="215" x2="200" y2={215 + 20 * Math.min(1, Math.max(0, drawProgress - 0.4) / 0.1)} stroke="var(--color-blue)" strokeWidth="1" />
              
              <line 
                x1="100" y1="235" 
                x2={100 + 200 * Math.min(1, Math.max(0, drawProgress - 0.5) / 0.2)} y2="235" 
                stroke="var(--color-blue)" strokeWidth="1" 
              />

              <line x1="100" y1="235" x2="100" y2={235 + 30 * Math.min(1, Math.max(0, drawProgress - 0.7) / 0.1)} stroke="var(--color-blue)" strokeWidth="1" />
              <line x1="200" y1="235" x2="200" y2={235 + 30 * Math.min(1, Math.max(0, drawProgress - 0.7) / 0.1)} stroke="var(--color-blue)" strokeWidth="1" />
              <line x1="300" y1="235" x2="300" y2={235 + 30 * Math.min(1, Math.max(0, drawProgress - 0.7) / 0.1)} stroke="var(--color-blue)" strokeWidth="1" />
              
              <circle cx="100" cy="265" r="3" fill="var(--color-blue)" opacity={drawProgress > 0.8 ? 1 : 0} />
              <circle cx="200" cy="265" r="3" fill="var(--color-blue)" opacity={drawProgress > 0.8 ? 1 : 0} />
              <circle cx="300" cy="265" r="3" fill="var(--color-blue)" opacity={drawProgress > 0.8 ? 1 : 0} />

              <text x="100" y="285" textAnchor="middle" className="svg-label" opacity={drawProgress > 0.8 ? 1 : 0}>MESSAGE</text>
              <text x="200" y="285" textAnchor="middle" className="svg-label" opacity={drawProgress > 0.8 ? 1 : 0}>AUDIENCE</text>
              <text x="300" y="285" textAnchor="middle" className="svg-label" opacity={drawProgress > 0.8 ? 1 : 0}>CHANNEL</text>
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
}
