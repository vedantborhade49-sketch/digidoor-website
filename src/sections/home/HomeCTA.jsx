import { Link } from 'react-router-dom';

export default function HomeCTA() {
  return (
    <section className="home-cta full-width-section bg-navy text-white diagonal-cut-top">
      <div className="arch-bg-grid"></div>
      
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
          
          <h2 className="display-heading" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 500, lineHeight: 1, marginBottom: '2rem' }}>
            WHAT'S BEHIND<br/>
            YOUR NEXT DOOR?
          </h2>
          
          <p className="body" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>
            Let's find out.
          </p>
          
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-blue)', color: 'var(--color-white)', borderColor: 'var(--color-blue)' }}>
            LET'S TALK &rarr;
          </Link>
          
        </div>
        
      </div>
    </section>
  );
}
