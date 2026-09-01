import { Link } from 'react-router-dom';
import SectionEyebrow from '../../components/ui/SectionEyebrow';
import RevealText from '../../components/ui/RevealText';

const projects = [
  {
    id: 1,
    title: "Aura Residences",
    category: "LUXURY RESIDENTIAL",
    services: "Brand Identity, 3D Visualisation, Launch Campaign",
    image: "/images/work/project_01.png"
  },
  {
    id: 2,
    title: "The Vertex",
    category: "COMMERCIAL HUB",
    services: "Digital Experience, Performance Marketing, Content",
    image: "/images/work/project_02.png"
  },
  {
    id: 3,
    title: "Oasis Estates",
    category: "MASTERPLAN DEVELOPMENT",
    services: "Brand Strategy, Website Design, Social Media",
    image: "/images/work/project_03.png"
  }
];

export default function HomeWork() {
  return (
    <section className="home-work full-width-section bg-white text-navy noise-overlay relative-overflow">
      <div className="grid-overlay-light"></div>
      <div className="container" style={{ paddingBottom: 'clamp(6rem, 10vw, 10rem)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <SectionEyebrow number="03" title="SELECTED WORK" className="mb-8" />
            <RevealText 
              elementType="h2" 
              className="h1"
              text={[
                <span key="1">Where strategy</span>,
                <span key="2">meets <span className="accent-serif text-blue">execution.</span></span>
              ]}
            />
          </div>
        </div>

        <div className="home-work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
          
          {/* Project 1 - Large */}
          <div style={{ gridColumn: '1 / -1' }} className="home-project-card">
            <Link to="/work" style={{ textDecoration: 'none' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: 'var(--color-background)', marginBottom: '1.5rem' }}>
                <img src={projects[0].image} alt={projects[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span className="label" style={{ letterSpacing: '0.14em', opacity: 0.6, marginBottom: '0.5rem', display: 'block' }}>01</span>
                  <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 600, color: 'var(--color-navy)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>{projects[0].title}</h3>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-navy)' }}>{projects[0].category} / {projects[0].services}</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Project 2 - Half */}
          <div style={{ gridColumn: '1 / 7' }} className="home-project-card">
             <Link to="/work" style={{ textDecoration: 'none' }}>
              <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--color-background)', marginBottom: '1.5rem', marginTop: '4rem' }}>
                <img src={projects[1].image} alt={projects[1].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="label" style={{ letterSpacing: '0.14em', opacity: 0.6, marginBottom: '0.5rem', display: 'block' }}>02</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: 600, color: 'var(--color-navy)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>{projects[1].title}</h3>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-navy)' }}>{projects[1].category}</span>
            </Link>
          </div>

          {/* Project 3 - Half (offset) */}
          <div style={{ gridColumn: '7 / -1' }} className="home-project-card">
             <Link to="/work" style={{ textDecoration: 'none' }}>
              <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--color-background)', marginBottom: '1.5rem', marginTop: '8rem' }}>
                <img src={projects[2].image} alt={projects[2].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="label" style={{ letterSpacing: '0.14em', opacity: 0.6, marginBottom: '0.5rem', display: 'block' }}>03</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: 600, color: 'var(--color-navy)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>{projects[2].title}</h3>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-navy)' }}>{projects[2].category}</span>
            </Link>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '6rem' }}>
           <Link to="/work" className="hover-cta-button" style={{ 
             display: 'inline-flex', 
             alignItems: 'center', 
             gap: '0.75rem', 
             color: 'var(--color-navy)', 
             textDecoration: 'none', 
             fontWeight: 500, 
             fontSize: '14px',
             borderBottom: '1px solid rgba(8, 43, 92, 0.2)',
             paddingBottom: '0.5rem',
             transition: 'all 0.3s ease'
           }}>
             VIEW ALL WORK <span style={{ transition: 'transform 0.3s ease' }}>&rarr;</span>
           </Link>
        </div>

      </div>
    </section>
  );
}
