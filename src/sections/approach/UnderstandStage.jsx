import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function UnderstandStage() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.3 });

  // Initial nodes
  const initialNodes = [
    { label: 'PROJECT', x: 50, y: 50 },
    { label: 'AUDIENCE', x: 350, y: 80 },
    { label: 'MARKET', x: 100, y: 300 },
    { label: 'PLACE', x: 300, y: 320 },
    { label: 'COMPETITION', x: 50, y: 180 },
    { label: 'OBJECTIVE', x: 350, y: 200 },
  ];

  // Final nodes
  const finalNodes = [
    { label: 'AUDIENCE', x: 200, y: 280 },
    { label: 'POSITIONING', x: 120, y: 320 },
    { label: 'OPPORTUNITY', x: 280, y: 320 },
  ];

  const collapseProgress = Math.min(1, progress / 0.4);
  const fadeOut = progress > 0.4 ? Math.max(0, 1 - (progress - 0.4) / 0.2) : 1;
  const fadeIn = progress > 0.5 ? Math.min(1, (progress - 0.5) / 0.3) : 0;

  return (
    <section id="understand" ref={ref} className="stage-section full-width-section bg-white text-navy">
      <div className="arch-detail" style={{ position: 'absolute', top: '20px', right: '5%' }}>DIGIDOOR / PROCESS</div>
      
      <div className="container stage-layout">
        
        <div className="stage-content">
          <span className="label text-blue">01 / UNDERSTAND</span>
          <h2 className="h2-normal stage-heading">
            Before we create,<br/>we understand.
          </h2>
          <div className="body stage-body">
            <p>We start with the project, the market, the audience, the competition and the business objective.</p>
            <p>What is being built? Who is it for? Why should anyone care? What does success actually look like?</p>
          </div>
        </div>

        <div className="stage-visual">
          <svg viewBox="0 0 400 400" className="approach-svg">
            <g opacity={fadeOut}>
              {initialNodes.map((node, i) => {
                const currentX = node.x + (200 - node.x) * collapseProgress;
                const currentY = node.y + (200 - node.y) * collapseProgress;
                return (
                  <g key={`initial-${i}`}>
                    <circle cx={currentX} cy={currentY} r="3" fill="var(--color-navy)" opacity="0.5" />
                    <text x={currentX} y={currentY - 10} textAnchor="middle" className="svg-label">
                      {node.label}
                    </text>
                    <line x1={currentX} y1={currentY} x2="200" y2="200" stroke="var(--color-blue)" strokeDasharray="2,4" opacity="0.2" />
                  </g>
                );
              })}
            </g>

            <g opacity={fadeIn}>
              <text x="200" y="200" textAnchor="middle" className="svg-label-large text-blue font-bold">
                INSIGHT
              </text>
              {finalNodes.map((node, i) => (
                <g key={`final-${i}`}>
                  <line x1="200" y1="210" x2={node.x} y2={node.y} stroke="var(--color-blue)" strokeWidth="1" opacity="0.3" />
                  <circle cx={node.x} cy={node.y} r="3" fill="var(--color-blue)" />
                  <text x={node.x} y={node.y + 15} textAnchor="middle" className="svg-label">
                    {node.label}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
}
