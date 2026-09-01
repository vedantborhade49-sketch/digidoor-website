import { Link } from 'react-router-dom';

export default function HomeSignals() {
  return (
    <section className="home-signals full-width-section bg-white text-navy">
      <div className="container" style={{ padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          
          {/* Industry Context */}
          <div style={{ maxWidth: '600px' }}>
            <span className="label text-blue">INDUSTRY</span>
            <h2 className="h2" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Built for developers,<br/>agencies and brands.
            </h2>
            <p className="body" style={{ color: 'var(--color-text-muted)' }}>
              From luxury residential high-rises to masterplan communities and commercial hubs. We understand the nuances of selling off-plan, driving footfall, and building long-term brand equity in the property sector.
            </p>
          </div>
          
          {/* Careers Teaser */}
          <div style={{ borderTop: '1px solid rgba(8, 43, 92, 0.1)', paddingTop: '4rem', marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h3 className="h2" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
                BUILD SOMETHING<br/>
                WORTH OPENING.
              </h3>
              <p className="body" style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
                Interested in working with Digidoor?
              </p>
            </div>
            
            <Link to="/career" className="btn btn-secondary" style={{ borderColor: 'var(--color-navy)', color: 'var(--color-navy)' }}>
              VIEW CAREERS &rarr;
            </Link>
          </div>
          
        </div>

      </div>
    </section>
  );
}
