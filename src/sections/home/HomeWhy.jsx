export default function HomeWhy() {
  return (
    <section className="home-why full-width-section bg-navy text-white diagonal-cut-top diagonal-cut-bottom">
      <div className="arch-bg-grid"></div>
      
      <div className="container" style={{ padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, lineHeight: 1.1 }}>
            WE UNDERSTAND THE PROPERTY<br/>BEFORE WE MARKET IT.
          </h2>
          
          <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, lineHeight: 1.1, color: 'rgba(255,255,255,0.4)' }}>
            WE FIND THE STORY<br/>BEFORE WE MAKE THE CREATIVE.
          </h2>
          
          <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, lineHeight: 1.1, color: 'rgba(255,255,255,0.4)' }}>
            WE CONNECT CREATIVE<br/>WITH DIGITAL.
          </h2>
          
          <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, lineHeight: 1.1, color: 'rgba(255,255,255,0.4)' }}>
            WE DESIGN FOR ATTENTION<br/>— AND ACTION.
          </h2>
          
          <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, lineHeight: 1.1, color: 'var(--color-blue)' }}>
            WE BUILD FOR WHAT<br/>HAPPENS NEXT.
          </h2>
          
        </div>
        
      </div>
    </section>
  );
}
