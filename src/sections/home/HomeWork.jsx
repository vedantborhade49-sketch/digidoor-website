import { Link } from 'react-router-dom';

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
            <span className="label text-blue">SELECTED WORK</span>
            <h2 className="h2" style={{ marginTop: '0.5rem' }}>Where strategy<br/>meets execution.</h2>
          </div>
          <Link to="/work" className="label text-blue" style={{ borderBottom: '1px solid var(--color-blue)', paddingBottom: '0.25rem', display: 'none' }}>
            VIEW ALL WORK &rarr;
          </Link>
        </div>

        <div className="home-work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
          
          {/* Project 1 - Large */}
          <div style={{ gridColumn: '1 / -1' }} className="home-project-card">
            <Link to="/work">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: 'var(--color-background)', marginBottom: '1.5rem' }}>
                <img src={projects[0].image} alt={projects[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="h3" style={{ marginBottom: '0.25rem' }}>{projects[0].title}</h3>
                  <span className="label" style={{ opacity: 0.5 }}>{projects[0].category}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="body" style={{ fontSize: '0.875rem' }}>{projects[0].services}</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Project 2 - Half */}
          <div style={{ gridColumn: '1 / 7' }} className="home-project-card">
             <Link to="/work">
              <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--color-background)', marginBottom: '1.5rem', marginTop: '4rem' }}>
                <img src={projects[1].image} alt={projects[1].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="h3" style={{ marginBottom: '0.25rem' }}>{projects[1].title}</h3>
              <span className="label" style={{ opacity: 0.5 }}>{projects[1].category}</span>
            </Link>
          </div>

          {/* Project 3 - Half (offset) */}
          <div style={{ gridColumn: '7 / -1' }} className="home-project-card">
             <Link to="/work">
              <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--color-background)', marginBottom: '1.5rem', marginTop: '8rem' }}>
                <img src={projects[2].image} alt={projects[2].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="h3" style={{ marginBottom: '0.25rem' }}>{projects[2].title}</h3>
              <span className="label" style={{ opacity: 0.5 }}>{projects[2].category}</span>
            </Link>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '6rem' }}>
           <Link to="/work" className="btn btn-primary" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
             VIEW ALL WORK &rarr;
           </Link>
        </div>

      </div>
    </section>
  );
}
