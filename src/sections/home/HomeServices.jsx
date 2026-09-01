import { useState } from 'react';
import SectionEyebrow from '../../components/ui/SectionEyebrow';
import RevealText from '../../components/ui/RevealText';

const services = [
  { id: 'strategy', title: 'STRATEGY', subServices: ['Positioning', 'Research', 'Brand Architecture'] },
  { id: 'creative', title: 'CREATIVE', subServices: ['Campaigns', 'Communication', 'Visual Identity'] },
  { id: 'digital', title: 'DIGITAL', subServices: ['Performance', 'Paid Media', 'Digital Growth'] },
  { id: 'content', title: 'CONTENT', subServices: ['Storytelling', 'Video', 'Community'] },
  { id: 'web', title: 'WEB', subServices: ['Premium Websites', 'Apps', 'Interactive Tools'] },
  { id: 'motion', title: 'MOTION', subServices: ['3D', 'Architectural Vis', 'Cinematic Video'] }
];

export default function HomeServices() {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="home-services full-width-section bg-white text-navy relative-overflow">
      <div className="grid-overlay-light"></div>
      <div className="container" style={{ padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        
        <SectionEyebrow number="02" title="EXPERTISE" className="mb-8" />
        
        <RevealText 
          elementType="h2" 
          className="h1 mb-12"
          style={{ maxWidth: '700px' }}
          text={[
            <span key="1">We build the complete</span>,
            <span key="2">property ecosystem.</span>
          ]}
        />

        <div className="home-services-layout" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', marginTop: '4rem' }}>
          
          <div className="services-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((service, idx) => {
              const isActive = activeService === service.id;
              return (
                <div 
                  key={service.id}
                  className="service-item"
                  onMouseEnter={() => setActiveService(service.id)}
                  style={{
                    cursor: 'pointer',
                    padding: '1.5rem 0',
                    borderBottom: '1px solid rgba(8, 43, 92, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem'
                  }}
                >
                  <span className="label" style={{ opacity: isActive ? 1 : 0.3, width: '40px' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 
                      style={{ 
                        margin: 0, 
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        opacity: isActive ? 1 : 0.3,
                        transform: isActive ? 'scale(1.02) translateX(10px)' : 'scale(1) translateX(0)',
                        transformOrigin: 'left center',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Sub-services reveal on hover */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'flex-end',
                        overflow: 'hidden',
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateX(0)' : 'translateX(20px)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {service.subServices.map((sub, sIdx) => (
                        <span key={sIdx} className="label" style={{ 
                          fontSize: '0.7rem', 
                          opacity: isActive ? 0.7 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                          transition: `all 0.3s cubic-bezier(0.16, 1, 0.3, 1) ${sIdx * 0.05}s`
                        }}>
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services-visual desktop-only" style={{ position: 'relative', height: '100%', minHeight: '600px' }}>
            <div style={{ position: 'sticky', top: '150px', width: '100%', aspectRatio: '4/5', backgroundColor: 'var(--color-background)', overflow: 'hidden' }}>
              <img 
                src={`/images/services/${activeService}.png`} 
                alt={activeService} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'opacity 0.4s ease'
                }}
                onError={(e) => {
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
