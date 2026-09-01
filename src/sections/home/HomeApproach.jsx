import { Link } from 'react-router-dom';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function HomeApproach() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.2 });

  // A rapid sequence condensing the 7 stages into one animation
  // 0-0.2: Understand (Nodes organize)
  // 0.2-0.4: Define (Line connects)
  // 0.4-0.6: Create (Fragments assemble)
  // 0.6-0.8: Communicate (Network expands)
  // 0.8-1.0: Activate (Signal shoots)
  
  const step = Math.min(4, Math.floor(progress * 5)); // 0 to 4
  const stepProgress = (progress * 5) % 1;

  return (
    <section ref={ref} className="home-approach full-width-section bg-navy text-white diagonal-cut-top diagonal-cut-bottom">
      <div className="arch-bg-grid"></div>
      <div className="arch-detail" style={{ position: 'absolute', top: '20px', left: '20px' }}>DIGIDOOR / APPROACH_SYSTEM</div>

      <div className="container" style={{ padding: 'clamp(8rem, 12vw, 12rem) 0' }}>
        
        <div className="home-approach-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
          
          <div className="home-approach-content">
            <span className="label text-blue">OUR APPROACH</span>
            <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
              We build the right<br/>system for the problem.
            </h2>
            <div className="body" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px', marginBottom: '3rem' }}>
              <p>We don't follow a formula. We understand the objective, find the opportunity, build the creative, and drive it through the market to get results.</p>
            </div>
            
            <Link to="/approach" className="btn btn-primary" style={{ backgroundColor: 'var(--color-blue)', color: 'var(--color-white)', borderColor: 'var(--color-blue)' }}>
              EXPLORE OUR APPROACH &rarr;
            </Link>
          </div>

          <div className="home-approach-visual" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', aspectRatio: '1', position: 'relative' }}>
            <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              
              {/* UNDERSTAND: Nodes organize to the center */}
              <g opacity={progress < 0.2 ? 1 : 0.2}>
                <circle cx={50 + 150 * stepProgress} cy={50 + 150 * stepProgress} r="3" fill="var(--color-white)" opacity="0.5" />
                <circle cx={350 - 150 * stepProgress} cy={80 + 120 * stepProgress} r="3" fill="var(--color-white)" opacity="0.5" />
                <circle cx={100 + 100 * stepProgress} cy={350 - 150 * stepProgress} r="3" fill="var(--color-white)" opacity="0.5" />
                
                <text x="200" y="220" textAnchor="middle" className="svg-label" fill="var(--color-white)" opacity={stepProgress > 0.8 ? 1 : 0}>INSIGHT</text>
              </g>

              {/* DEFINE: Center insight expands to a strategy line */}
              <g opacity={progress >= 0.2 && progress < 0.4 ? 1 : (progress >= 0.4 ? 0.3 : 0)}>
                 <line x1="200" y1="200" x2={200 - 100 * (progress >= 0.2 ? (progress >= 0.4 ? 1 : stepProgress) : 0)} y2="200" stroke="var(--color-blue)" strokeWidth="1" />
                 <line x1="200" y1="200" x2={200 + 100 * (progress >= 0.2 ? (progress >= 0.4 ? 1 : stepProgress) : 0)} y2="200" stroke="var(--color-blue)" strokeWidth="1" />
                 <text x="200" y="190" textAnchor="middle" className="svg-label" fill="var(--color-white)" opacity={progress >= 0.3 ? 1 : 0}>STRATEGY</text>
              </g>

              {/* CREATE: The line forms a solid box (the idea) */}
              <g opacity={progress >= 0.4 && progress < 0.6 ? 1 : (progress >= 0.6 ? 0.4 : 0)}>
                 <rect 
                   x={100 + 50 * (1 - (progress >= 0.4 ? (progress >= 0.6 ? 1 : stepProgress) : 0))}
                   y={150 + 50 * (1 - (progress >= 0.4 ? (progress >= 0.6 ? 1 : stepProgress) : 0))}
                   width={200 * (progress >= 0.4 ? (progress >= 0.6 ? 1 : stepProgress) : 0)}
                   height={100 * (progress >= 0.4 ? (progress >= 0.6 ? 1 : stepProgress) : 0)}
                   fill="rgba(18,100,216,0.1)"
                   stroke="var(--color-blue)"
                 />
                 <text x="200" y="205" textAnchor="middle" className="svg-label font-bold" fill="var(--color-white)" opacity={progress >= 0.5 ? 1 : 0}>CREATIVE IDEA</text>
              </g>

              {/* COMMUNICATE: The idea branches out to touchpoints */}
              <g opacity={progress >= 0.6 && progress < 0.8 ? 1 : (progress >= 0.8 ? 0.5 : 0)}>
                 <line x1="200" y1="250" x2="200" y2={250 + 50 * (progress >= 0.6 ? (progress >= 0.8 ? 1 : stepProgress) : 0)} stroke="var(--color-white)" strokeWidth="0.5" />
                 <line x1="150" y1="250" x2={150 - 50 * (progress >= 0.6 ? (progress >= 0.8 ? 1 : stepProgress) : 0)} y2={250 + 50 * (progress >= 0.6 ? (progress >= 0.8 ? 1 : stepProgress) : 0)} stroke="var(--color-white)" strokeWidth="0.5" />
                 <line x1="250" y1="250" x2={250 + 50 * (progress >= 0.6 ? (progress >= 0.8 ? 1 : stepProgress) : 0)} y2={250 + 50 * (progress >= 0.6 ? (progress >= 0.8 ? 1 : stepProgress) : 0)} stroke="var(--color-white)" strokeWidth="0.5" />
                 
                 <text x="100" y="315" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.5)" opacity={progress >= 0.7 ? 1 : 0}>SOCIAL</text>
                 <text x="200" y="315" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.5)" opacity={progress >= 0.7 ? 1 : 0}>DIGITAL</text>
                 <text x="300" y="315" textAnchor="middle" className="svg-label" fill="rgba(255,255,255,0.5)" opacity={progress >= 0.7 ? 1 : 0}>CONTENT</text>
              </g>

              {/* ACTIVATE: Signals fire out into the market */}
              {progress >= 0.8 && (
                <g>
                  <circle cx="100" cy={320 + 80 * stepProgress} r="2" fill="var(--color-blue)" opacity={1 - stepProgress} />
                  <circle cx="200" cy={320 + 80 * stepProgress} r="2" fill="var(--color-blue)" opacity={1 - stepProgress} />
                  <circle cx="300" cy={320 + 80 * stepProgress} r="2" fill="var(--color-blue)" opacity={1 - stepProgress} />
                  
                  <text x="200" y="380" textAnchor="middle" className="svg-label font-bold" fill="var(--color-blue)" opacity={stepProgress > 0.5 ? 1 : 0}>MARKET ACTION</text>
                </g>
              )}
            </svg>
          </div>

        </div>
        
      </div>
    </section>
  );
}
