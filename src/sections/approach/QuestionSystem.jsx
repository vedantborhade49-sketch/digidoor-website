import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function QuestionSystem() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.2 });

  // progress goes 0 to 1 as we scroll through the section
  // Phase 1 (0-0.4): lines draw out
  // Phase 2 (0.4-0.8): nodes move in
  // Phase 3 (0.8-1): text changes to INSIGHT

  const lineDraw = Math.min(1, progress / 0.4);
  const moveIn = progress > 0.4 ? Math.min(1, (progress - 0.4) / 0.4) : 0;
  const showInsight = progress > 0.8;

  const radius = isNaN(moveIn) ? 120 : 120 * (1 - moveIn);
  const strokeDasharray = 120;
  const strokeDashoffset = strokeDasharray * (1 - lineDraw);

  return (
    <section ref={ref} className="question-system full-width-section bg-white text-navy section-padding-lg">
      <div className="container question-system-layout">
        
        <div className="question-text">
          <h2 className="h2-normal">
            Every project<br />
            starts with questions.<br />
            <span className="text-muted">Not assumptions.</span>
          </h2>
        </div>

        <div className="question-visual">
          <svg viewBox="0 0 400 400" className="question-svg">
            {/* Center dot/text */}
            <circle cx="200" cy="200" r="4" fill="var(--color-navy)" opacity={showInsight ? 0 : 1} />
            <text x="200" y="225" textAnchor="middle" className="svg-label" opacity={showInsight ? 0 : 1}>
              THE PROJECT
            </text>

            {/* Final Insight Text */}
            <text x="200" y="205" textAnchor="middle" className="svg-label-large text-blue" opacity={showInsight ? 1 : 0}>
              INSIGHT
            </text>

            {/* Nodes */}
            {[
              { label: 'WHAT', angle: -Math.PI / 2 },
              { label: 'WHO', angle: -Math.PI / 2 + (2 * Math.PI / 5) },
              { label: 'WHY', angle: -Math.PI / 2 + (4 * Math.PI / 5) },
              { label: 'WHERE', angle: -Math.PI / 2 + (6 * Math.PI / 5) },
              { label: 'WHEN', angle: -Math.PI / 2 + (8 * Math.PI / 5) },
            ].map((node, i) => {
              const x = 200 + radius * Math.cos(node.angle);
              const y = 200 + radius * Math.sin(node.angle);
              
              return (
                <g key={i} opacity={showInsight ? 0 : 1}>
                  <line 
                    x1="200" y1="200" 
                    x2={x} y2={y} 
                    stroke="var(--color-blue)" 
                    strokeWidth="1"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    opacity="0.3"
                  />
                  <circle cx={x} cy={y} r="3" fill="var(--color-blue)" opacity={lineDraw > 0.8 ? 1 : 0} />
                  <text x={x} y={y - 10} textAnchor="middle" className="svg-label" opacity={lineDraw > 0.8 ? 1 : 0}>
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

      </div>
    </section>
  );
}
