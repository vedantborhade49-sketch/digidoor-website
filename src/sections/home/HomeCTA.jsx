import { Link } from 'react-router-dom';
import RevealText from '../../components/ui/RevealText';

export default function HomeCTA() {
  return (
    <section className="home-cta full-width-section bg-navy text-white diagonal-cut-top relative-overflow noise-overlay">
      <div className="grid-overlay-dark"></div>
      
      <div className="container" style={{ padding: 'clamp(8rem, 12vw, 12rem) 0', position: 'relative', zIndex: 2 }}>
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Subtle architectural doorway reference */}
          <div style={{ 
            width: '80px', 
            height: '120px', 
            border: '1px solid rgba(255,255,255,0.2)', 
            borderBottom: 'none',
            margin: '0 auto 3rem auto',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '10px', 
              right: '-20px', 
              width: '1px', 
              height: '100px', 
              background: 'var(--color-blue)' 
            }}></div>
          </div>
          
          <RevealText 
            elementType="h2" 
            className="display-heading text-white" 
            style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}
            text={[
              <span key="1">WHAT'S BEHIND</span>,
              <span key="2">YOUR NEXT <span className="accent-serif text-blue">DOOR?</span></span>
            ]}
          />
          
          <p className="body" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', margin: '2rem auto 4rem', maxWidth: '400px' }}>
            Let's find out.
          </p>
          
          <Link to="/contact" className="hover-cta-button" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            color: 'var(--color-white)', 
            textDecoration: 'none', 
            fontWeight: 500, 
            fontSize: '14px',
            borderBottom: '1px solid rgba(255,255,255,0.3)',
            paddingBottom: '0.5rem',
            transition: 'all 0.3s ease'
          }}>
            LET'S TALK <span style={{ transition: 'transform 0.3s ease' }}>&rarr;</span>
          </Link>
          
          <style dangerouslySetInnerHTML={{__html: `
            .hover-cta-button:hover {
              border-bottom-color: var(--color-white) !important;
            }
            .hover-cta-button:hover span {
              transform: translateX(5px);
            }
          `}} />
          
        </div>
        
      </div>
    </section>
  );
}
