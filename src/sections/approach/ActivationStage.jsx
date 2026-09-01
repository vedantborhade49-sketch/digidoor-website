import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ActivationStage() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.1 });

  return (
    <section id="activate" ref={ref} className="activation-stage full-width-section bg-navy text-white">
      <div className="activation-background">
        <div className="activation-image-wrapper parallax-wrapper">
          <img 
            src="/images/approach/activation.png" 
            alt="Night time aerial residential view" 
            className="parallax-image"
            style={{ transform: `translateY(${-50 + progress * 100}px)`, opacity: 0.6 }}
          />
        </div>
        <div className="activation-overlay"></div>
      </div>

      <div className="container stage-layout" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="stage-content">
          <span className="label text-blue">06 / ACTIVATE</span>
          <h2 className="h2-normal stage-heading">
            Ideas are meant<br />
            to move.
          </h2>
          <div className="body stage-body" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <p>We put the work into the market.</p>
            <p>Digital campaigns, paid media, social, search, content, landing experiences and performance marketing work together to create demand and action.</p>
          </div>
        </div>

        <div className="stage-visual">
          <div className="activation-network">
            <div className="act-node">IDEA</div>
            <div className="act-line">
              <div className="act-signal signal-1"></div>
            </div>
            
            <div className="act-node">CAMPAIGN</div>
            <div className="act-line">
              <div className="act-signal signal-2"></div>
            </div>
            
            <div className="act-node">AUDIENCE</div>
            <div className="act-line">
              <div className="act-signal signal-3"></div>
            </div>
            
            <div className="act-node highlight">RESPONSE</div>
          </div>
        </div>

      </div>
    </section>
  );
}
