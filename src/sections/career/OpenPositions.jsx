import { useScrollReveal } from '../../hooks/useScrollReveal';
import { jobs } from '../../data/jobs';

export default function OpenPositions() {
  const ref = useScrollReveal();

  return (
    <section id="open-positions" ref={ref} className="open-positions-section container section-padding">
      <div className="open-positions-layout">
        <div className="open-positions-left reveal-element">
          <span className="label">OPEN POSITIONS</span>
          <h2 className="open-positions-heading">Find your place<br />at Digidoor.</h2>
        </div>

        <div className="open-positions-right">
          {jobs.length === 0 ? (
            <div className="open-positions-empty reveal-element" style={{ transitionDelay: '0.1s' }}>
              <p className="body">
                We're always interested in meeting talented people.
              </p>
              <p className="body" style={{ marginTop: '0.5rem' }}>
                No current openings?
              </p>
              <button 
                className="btn-primary" 
                style={{ marginTop: '2rem' }}
                onClick={() => {
                  const el = document.getElementById('dont-see-your-role');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                SEND YOUR PROFILE <span className="arrow" aria-hidden="true">→</span>
              </button>
            </div>
          ) : (
            <div className="open-positions-list">
              {jobs.map((job, index) => (
                <div 
                  key={index} 
                  className="job-row reveal-element"
                  style={{ transitionDelay: `${0.1 * index}s` }}
                >
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span>{job.department}</span>
                      <span className="meta-dot">•</span>
                      <span>{job.location}</span>
                      <span className="meta-dot">•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="btn-tertiary">
                    VIEW ROLE <span className="arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div id="dont-see-your-role" className="dont-see-role reveal-element">
        <div className="dont-see-layout">
          <h3 className="dont-see-heading">
            Don't see<br />your role?
            <br />
            We'd still like<br />to meet you.
          </h3>
          <div className="dont-see-content">
            <p className="body">
              If you think you can bring something valuable to Digidoor, send us your profile and tell us what you want to build.
            </p>
            <button className="btn-primary">
              SEND YOUR PROFILE <span className="arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
