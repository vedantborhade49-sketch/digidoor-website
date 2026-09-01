import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function CommunicationStage() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.3 });

  const expand = Math.min(1, progress / 0.4);
  const signalProgress = progress > 0.4 ? ((progress - 0.4) / 0.6) : 0;
  const activeSignal = (signalProgress * 3) % 1;

  return (
    <section id="communicate" ref={ref} className="stage-section full-width-section bg-navy text-white diagonal-cut-top diagonal-cut-bottom">
      <div className="arch-bg-grid"></div>
      
      <div className="container stage-layout">
        
        <div className="stage-content">
          <span className="label text-blue">05 / COMMUNICATE</span>
          <h2 className="h2-normal stage-heading">
            One idea.<br/>Many touchpoints.
          </h2>
          <div className="body stage-body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>A campaign is bigger than one advertisement.</p>
            <p>The central idea becomes a communication system across social, digital, content, websites, outdoor, launch assets and everywhere the audience meets the brand.</p>
          </div>
        </div>

        <div className="stage-visual">
          <svg viewBox="0 0 400 400" className="approach-svg">
            <circle cx="200" cy="50" r="4" fill="var(--color-white)" />
            <text x="200" y="40" textAnchor="middle" className="svg-label font-bold" fill="var(--color-white)">IDEA</text>

            <line x1="200" y1="50" x2="200" y2={50 + 50 * expand} stroke="var(--color-blue)" strokeWidth="1" />
            <line x1={200 - 100 * expand} y1="100" x2={200 + 100 * expand} y2="100" stroke="var(--color-blue)" strokeWidth="1" />

            <line x1="100" y1="100" x2="100" y2={100 + 40 * expand} stroke="var(--color-blue)" strokeWidth="1" />
            <line x1="200" y1="100" x2="200" y2={100 + 40 * expand} stroke="var(--color-blue)" strokeWidth="1" />
            <line x1="300" y1="100" x2="300" y2={100 + 40 * expand} stroke="var(--color-blue)" strokeWidth="1" />

            <g opacity={expand > 0.8 ? 1 : 0}>
              <text x="100" y="160" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.6)">SOCIAL</text>
              <text x="200" y="160" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.6)">DIGITAL</text>
              <text x="300" y="160" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.6)">CONTENT</text>
            </g>

            <line x1="100" y1="170" x2="100" y2={170 + 40 * expand} stroke="var(--color-blue)" strokeWidth="1" />
            <line x1="200" y1="170" x2="200" y2={170 + 40 * expand} stroke="var(--color-blue)" strokeWidth="1" />
            <line x1="300" y1="170" x2="300" y2={170 + 40 * expand} stroke="var(--color-blue)" strokeWidth="1" />

            <g opacity={expand > 0.9 ? 1 : 0}>
              <text x="100" y="230" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.6)">COMMUNITY</text>
              <text x="200" y="230" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.6)">WEBSITE</text>
              <text x="300" y="230" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.6)">VIDEO</text>
            </g>

            <line x1="100" y1="240" x2="100" y2={240 + 30 * expand} stroke="var(--color-blue)" strokeWidth="1" />
            <line x1="200" y1="240" x2="200" y2={240 + 30 * expand} stroke="var(--color-blue)" strokeWidth="1" />
            <line x1="300" y1="240" x2="300" y2={240 + 30 * expand} stroke="var(--color-blue)" strokeWidth="1" />

            <line x1={200 - 100 * expand} y1="270" x2={200 + 100 * expand} y2="270" stroke="var(--color-blue)" strokeWidth="1" />
            <line x1="200" y1="270" x2="200" y2={270 + 30 * expand} stroke="var(--color-blue)" strokeWidth="1" />

            <circle cx="200" cy="300" r="4" fill="var(--color-white)" opacity={expand > 0.95 ? 1 : 0} />
            <text x="200" y="320" textAnchor="middle" className="svg-label font-bold" fill="var(--color-white)" opacity={expand > 0.95 ? 1 : 0}>AUDIENCE</text>

            {progress > 0.4 && (
              <g>
                <circle cx="200" cy={50 + 50 * Math.min(1, activeSignal * 4)} r="2" fill="var(--color-blue)" />
                
                <circle cx={200 - 100 * Math.max(0, Math.min(1, activeSignal * 4 - 1))} cy="100" r="2" fill="var(--color-blue)" opacity={activeSignal > 0.25 && activeSignal < 0.5 ? 1 : 0} />
                <circle cx={200 + 100 * Math.max(0, Math.min(1, activeSignal * 4 - 1))} cy="100" r="2" fill="var(--color-blue)" opacity={activeSignal > 0.25 && activeSignal < 0.5 ? 1 : 0} />
                
                <circle cx="100" cy={100 + 140 * Math.max(0, Math.min(1, activeSignal * 2 - 1))} r="2" fill="var(--color-blue)" opacity={activeSignal > 0.5 ? 1 : 0} />
                <circle cx="200" cy={100 + 140 * Math.max(0, Math.min(1, activeSignal * 2 - 1))} r="2" fill="var(--color-blue)" opacity={activeSignal > 0.5 ? 1 : 0} />
                <circle cx="300" cy={100 + 140 * Math.max(0, Math.min(1, activeSignal * 2 - 1))} r="2" fill="var(--color-blue)" opacity={activeSignal > 0.5 ? 1 : 0} />
              </g>
            )}
          </svg>
        </div>

      </div>
    </section>
  );
}
