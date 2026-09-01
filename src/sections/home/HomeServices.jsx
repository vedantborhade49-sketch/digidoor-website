import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { id: 'strategy', title: 'Strategy & Brand', desc: 'Positioning, research and brand architecture for real estate.' },
  { id: 'creative', title: 'Creative & Communication', desc: 'Campaign concepts, visual identity and art direction.' },
  { id: 'digital', title: 'Digital Marketing', desc: 'Performance, paid media, search and digital growth.' },
  { id: 'content', title: 'Content & Social', desc: 'Storytelling, video, and community management.' },
  { id: 'web', title: 'Website & Digital Experiences', desc: 'Premium property websites, apps and interactive tools.' },
  { id: 'motion', title: '3D, Motion & Visual', desc: 'Architectural visualisation, animation and cinematic video.' }
];

export default function HomeServices() {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="home-services full-width-section bg-white text-navy">
      <div className="container" style={{ padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <span className="label text-blue">EXPERTISE</span>
          <h2 className="h2" style={{ marginTop: '0.5rem' }}>We build the complete<br/>property ecosystem.</h2>
        </div>

        <div className="home-services-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          
          <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {services.map((service) => (
              <div 
                key={service.id}
                className="service-item"
                onMouseEnter={() => setActiveService(service.id)}
                style={{
                  cursor: 'pointer',
                  borderBottom: '1px solid rgba(8, 43, 92, 0.1)',
                  paddingBottom: '1.5rem',
                  opacity: activeService === service.id ? 1 : 0.4,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <h3 className="h3" style={{ margin: 0, fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 400 }}>
                  {service.title}
                </h3>
                {activeService === service.id && (
                  <p className="body" style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                    {service.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="services-visual desktop-only" style={{ position: 'relative', height: '100%', minHeight: '500px' }}>
            <div style={{ position: 'sticky', top: '150px', width: '100%', aspectRatio: '4/5', backgroundColor: 'var(--color-background)', overflow: 'hidden' }}>
              <img 
                src={`/images/services/${activeService}.png`} 
                alt={activeService} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  // Fallback if specific image doesn't exist yet
                  e.target.src = '/images/work/project-02.png';
                }}
              />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
