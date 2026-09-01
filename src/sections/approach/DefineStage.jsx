import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function DefineStage() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.3 });

  // Noise dots
  const rows = 12;
  const cols = 12;
  const noiseDots = [];
  
  for(let r=0; r<rows; r++) {
    for(let c=0; c<cols; c++) {
      const x = 50 + c * 25 + (Math.random() * 15 - 7.5);
      const y = 50 + r * 25 + (Math.random() * 15 - 7.5);
      const targetX = 100 + (c * 15);
      const targetY = 200;
      noiseDots.push({ x, y, targetX, targetY });
    }
  }

  const organizeProgress = Math.min(1, progress / 0.5);
  const showText = progress > 0.5 ? Math.min(1, (progress - 0.5) / 0.3) : 0;

  return (
    <section id="define" ref={ref} className="stage-section full-width-section bg-navy text-white diagonal-cut-top diagonal-cut-bottom">
      <div className="arch-bg-grid"></div>
      <div className="arch-detail" style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.5 }}>X 120 Y 240</div>
      
      <div className="container stage-layout">
        
        <div className="stage-content">
          <span className="label text-blue">02 / DEFINE</span>
          <h2 className="h2-normal stage-heading">
            Find the position<br/>worth owning.
          </h2>
          <div className="body stage-body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>Research becomes clarity.</p>
            <p>We identify the positioning, audience tension, opportunity and reason to believe. This is where a project starts becoming a brand with something meaningful to say.</p>
          </div>
        </div>

        <div className="stage-visual">
          <svg viewBox="0 0 400 400" className="approach-svg">
            <g>
              {noiseDots.map((dot, i) => {
                const currentX = dot.x + (dot.targetX - dot.x) * organizeProgress;
                const currentY = dot.y + (dot.targetY - dot.y) * organizeProgress;
                const distFromCenter = Math.abs(currentX - 200);
                const keepOpacity = distFromCenter < 120 ? 1 : (1 - organizeProgress);

                return (
                  <circle 
                    key={i} 
                    cx={currentX} 
                    cy={currentY} 
                    r="1.5" 
                    fill="var(--color-white)" 
                    opacity={0.3 * keepOpacity} 
                  />
                );
              })}
            </g>

            <g opacity={1 - organizeProgress}>
              <text x="80" y="80" className="svg-label" fill="rgba(255,255,255,0.5)">CATEGORY</text>
              <text x="300" y="100" className="svg-label" fill="rgba(255,255,255,0.5)">COMPETITION</text>
              <text x="120" y="320" className="svg-label" fill="rgba(255,255,255,0.5)">AUDIENCE</text>
              <text x="280" y="280" className="svg-label" fill="rgba(255,255,255,0.5)">PRICE</text>
              <text x="200" y="150" textAnchor="middle" className="svg-label text-blue font-bold">POSITION</text>
            </g>

            <g opacity={showText}>
              <line x1="80" y1="180" x2="320" y2="180" stroke="var(--color-blue)" strokeWidth="1" />
              <text x="200" y="170" textAnchor="middle" className="svg-label-large text-white font-bold">
                CLEAR POSITION
              </text>
              <line x1="80" y1="220" x2="320" y2="220" stroke="var(--color-blue)" strokeWidth="1" />
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
}
