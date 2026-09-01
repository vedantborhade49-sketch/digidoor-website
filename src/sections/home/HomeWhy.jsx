import RevealText from '../../components/ui/RevealText';

export default function HomeWhy() {
  return (
    <section className="home-why full-width-section bg-navy text-white diagonal-cut-top diagonal-cut-bottom relative-overflow">
      <div className="grid-overlay-dark"></div>
      
      <div className="container" style={{ padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <RevealText 
            elementType="h2" 
            className="display-heading" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            text={[
              <span key="1">WE UNDERSTAND THE <span className="accent-serif">PROPERTY</span></span>,
              <span key="2">BEFORE WE MARKET IT.</span>
            ]}
          />
          
          <RevealText 
            elementType="h2" 
            className="display-heading" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'rgba(255,255,255,0.4)' }}
            text={[
              <span key="1">WE FIND THE <span className="accent-serif text-white">STORY</span></span>,
              <span key="2">BEFORE WE MAKE THE CREATIVE.</span>
            ]}
          />
          
          <RevealText 
            elementType="h2" 
            className="display-heading" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'rgba(255,255,255,0.4)' }}
            text={[
              <span key="1">WE CONNECT CREATIVE</span>,
              <span key="2">WITH <span className="accent-serif text-white">DIGITAL.</span></span>
            ]}
          />
          
          <RevealText 
            elementType="h2" 
            className="display-heading" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'rgba(255,255,255,0.4)' }}
            text={[
              <span key="1">WE DESIGN FOR <span className="accent-serif text-white">ATTENTION</span></span>,
              <span key="2">— AND ACTION.</span>
            ]}
          />
          
          <RevealText 
            elementType="h2" 
            className="display-heading text-white" 
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            text={[
              <span key="1">WE BUILD FOR WHAT</span>,
              <span key="2" className="text-blue accent-serif">HAPPENS NEXT.</span>
            ]}
          />
          
        </div>
        
      </div>
    </section>
  );
}
