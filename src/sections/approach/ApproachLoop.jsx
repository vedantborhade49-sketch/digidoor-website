import { useScrollProgress } from '../../hooks/useScrollProgress';

const loopNodes = [
  { label: 'UNDERSTAND', angle: -Math.PI / 2 },
  { label: 'DEFINE', angle: -Math.PI / 2 + (2 * Math.PI / 8) },
  { label: 'STRATEGIZE', angle: -Math.PI / 2 + (4 * Math.PI / 8) },
  { label: 'CREATE', angle: -Math.PI / 2 + (6 * Math.PI / 8) },
  { label: 'COMMUNICATE', angle: -Math.PI / 2 + (8 * Math.PI / 8) },
  { label: 'ACTIVATE', angle: -Math.PI / 2 + (10 * Math.PI / 8) },
  { label: 'MEASURE', angle: -Math.PI / 2 + (12 * Math.PI / 8) },
  { label: 'LEARN', angle: -Math.PI / 2 + (14 * Math.PI / 8) },
];

export default function ApproachLoop() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.4 });

  const radius = 140;
  const cx = 200;
  const cy = 200;
  
  const circleLength = 2 * Math.PI * radius;
  const drawProgress = Math.min(1, progress * 1.5);
  const strokeDashoffset = circleLength * (1 - drawProgress);

  return (
    <section ref={ref} className="approach-loop full-width-section bg-navy text-white diagonal-cut-top">
      <div className="arch-bg-grid"></div>

      <div className="container loop-layout">
        
        <div className="loop-visual">
          <svg viewBox="0 0 400 400" className="loop-svg">
            <text x="200" y="205" textAnchor="middle" className="svg-label-large text-blue font-bold tracking-widest">
              DIGIDOOR
            </text>

            <circle 
              cx={cx} 
              cy={cy} 
              r={radius} 
              fill="none" 
              stroke="var(--color-white)" 
              strokeWidth="1" 
              opacity="0.1"
            />
            
            <circle 
              cx={cx} 
              cy={cy} 
              r={radius} 
              fill="none" 
              stroke="var(--color-blue)" 
              strokeWidth="1.5" 
              strokeDasharray={circleLength}
              strokeDashoffset={strokeDashoffset}
              transform={`rotate(-90 ${cx} ${cy})`}
            />

            {loopNodes.map((node, i) => {
              const nodeProgressThreshold = i / loopNodes.length;
              const isVisible = drawProgress > nodeProgressThreshold;
              
              const x = cx + radius * Math.cos(node.angle);
              const y = cy + radius * Math.sin(node.angle);

              let textAnchor = "middle";
              let textX = x;
              let textY = y;

              if (Math.cos(node.angle) > 0.1) {
                textAnchor = "start";
                textX += 15;
                textY += 4;
              } else if (Math.cos(node.angle) < -0.1) {
                textAnchor = "end";
                textX -= 15;
                textY += 4;
              } else if (Math.sin(node.angle) < 0) {
                textY -= 15;
              } else {
                textY += 25;
              }

              return (
                <g key={i} opacity={isVisible ? 1 : 0} style={{ transition: 'opacity 0.3s ease' }}>
                  <circle cx={x} cy={y} r="4" fill="var(--color-blue)" />
                  <text x={textX} y={textY} textAnchor={textAnchor} className="svg-label font-bold" fill="var(--color-white)">
                    {node.label}
                  </text>
                </g>
              );
            })}

            {drawProgress >= 1 && (
               <circle cx="0" cy="0" r="3" fill="var(--color-blue)">
                 <animateMotion 
                   path={`M ${cx} ${cy - radius} A ${radius} ${radius} 0 1 1 ${cx - 0.1} ${cy - radius}`} 
                   dur="4s" 
                   repeatCount="indefinite" 
                 />
               </circle>
            )}
          </svg>
        </div>

        <div className="loop-content" style={{ opacity: drawProgress > 0.8 ? 1 : 0, transition: 'opacity 0.5s ease' }}>
          <span className="label text-blue">THE APPROACH</span>
          <h2 className="h2-normal" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            We don't follow<br />
            a formula.
          </h2>
          <p className="body-large" style={{ color: 'rgba(255,255,255,0.7)' }}>
            We build the right one<br />
            for the problem.
          </p>
        </div>

      </div>
    </section>
  );
}
