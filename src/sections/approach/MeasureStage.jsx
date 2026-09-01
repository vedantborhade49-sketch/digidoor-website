import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function MeasureStage() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.3 });

  const drawLine = Math.min(1, progress / 0.5);
  const dataFlow = progress > 0.5 ? Math.min(1, (progress - 0.5) / 0.5) : 0;

  return (
    <section id="measure" ref={ref} className="stage-section full-width-section text-navy diagonal-cut-top" style={{ backgroundColor: '#F8FBFF' }}>
      <div className="container stage-layout">
        
        <div className="stage-content">
          <span className="label text-blue">07 / MEASURE</span>
          <h2 className="h2-normal stage-heading">
            The market<br />
            answers back.
          </h2>
          <div className="body stage-body text-muted">
            <p>We measure what happened.</p>
            <p>What worked? What didn't? Where did people respond? What can we improve?</p>
            <p>Performance feeds learning. Learning feeds the next decision.</p>
          </div>
        </div>

        <div className="stage-visual">
          <svg viewBox="0 0 400 400" className="approach-svg">
            <text x="200" y="50" textAnchor="middle" className="svg-label">CAMPAIGN</text>
            <line x1="200" y1="60" x2="200" y2={60 + 30 * Math.min(1, drawLine / 0.33)} stroke="var(--color-navy)" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />
            
            <circle cx="200" cy="100" r="3" fill="var(--color-navy)" opacity="0.3" />
            <text x="200" y="120" textAnchor="middle" className="svg-label">AUDIENCE</text>
            <line x1="200" y1="130" x2="200" y2={130 + 30 * Math.min(1, Math.max(0, drawLine - 0.33) / 0.33)} stroke="var(--color-navy)" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />
            
            <circle cx="200" cy="170" r="3" fill="var(--color-navy)" opacity="0.3" />
            <text x="200" y="190" textAnchor="middle" className="svg-label">RESPONSE</text>
            <line x1="200" y1="200" x2="200" y2={200 + 30 * Math.min(1, Math.max(0, drawLine - 0.66) / 0.33)} stroke="var(--color-navy)" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />
            
            <circle cx="200" cy="240" r="4" fill="var(--color-blue)" opacity={drawLine > 0.9 ? 1 : 0} />
            <text x="200" y="265" textAnchor="middle" className="svg-label font-bold text-blue" opacity={drawLine > 0.9 ? 1 : 0}>DATA</text>

            <g opacity={dataFlow > 0 ? 1 : 0}>
              <path 
                d="M 180 260 Q 50 260 50 150 Q 50 40 180 40" 
                fill="none" 
                stroke="var(--color-blue)" 
                strokeWidth="1" 
                strokeDasharray="400"
                strokeDashoffset={400 * (1 - dataFlow)}
              />
              <circle cx="180" cy="40" r="3" fill="var(--color-blue)" opacity={dataFlow > 0.95 ? 1 : 0} />
              <text x="200" y="45" className="svg-label text-blue font-bold" opacity={dataFlow > 0.95 ? 1 : 0}>INSIGHT</text>
              
              {dataFlow > 0 && (
                 <circle cx="0" cy="0" r="3" fill="var(--color-blue)">
                   <animateMotion 
                     path="M 180 260 Q 50 260 50 150 Q 50 40 180 40" 
                     dur="2s" 
                     repeatCount="indefinite" 
                   />
                 </circle>
              )}
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
}
