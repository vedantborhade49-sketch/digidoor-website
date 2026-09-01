import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function CreativeStage() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0.3 });
  const assembleProgress = Math.min(1, Math.max(0, progress - 0.1) / 0.6);

  return (
    <section id="create" ref={ref} className="stage-section full-width-section bg-white text-navy">
      <div className="container stage-layout">
        
        <div className="stage-content">
          <span className="label text-blue">04 / CREATE</span>
          <h2 className="h2-normal stage-heading">
            Now the strategy<br/>takes shape.
          </h2>
          <div className="body stage-body">
            <p>This is where strategy becomes something people can see, feel and remember.</p>
            <p>Campaign concepts. Visual identities. Art direction. Copy. Content. Motion. The idea gives the strategy a voice.</p>
          </div>
        </div>

        <div className="stage-visual">
          <div className="creative-stage-container">
            <div 
              className="creative-fragment frag-1"
              style={{
                transform: `translate(${(1 - assembleProgress) * -100}px, ${(1 - assembleProgress) * -100}px) rotate(${(1 - assembleProgress) * -15}deg)`,
                opacity: 0.3 + (assembleProgress * 0.7)
              }}
            >
              <img src="/images/approach/creative.png" alt="Creative fragment" />
              <span className="frag-label" style={{ opacity: 1 - assembleProgress }}>ARCHITECTURE</span>
            </div>

            <div 
              className="creative-fragment frag-2"
              style={{
                transform: `translate(${(1 - assembleProgress) * 100}px, ${(1 - assembleProgress) * 100}px) rotate(${(1 - assembleProgress) * 10}deg)`,
                opacity: 0.3 + (assembleProgress * 0.7)
              }}
            >
              <img src="/images/approach/creative.png" alt="Creative fragment" />
              <span className="frag-label" style={{ opacity: 1 - assembleProgress }}>TYPOGRAPHY</span>
            </div>

            <div 
              className="creative-fragment frag-3"
              style={{
                opacity: assembleProgress,
                clipPath: `inset(${(1 - assembleProgress) * 30}% ${(1 - assembleProgress) * 30}%)`
              }}
            >
              <img src="/images/approach/creative.png" alt="Completed creative" />
            </div>

            <div className="creative-idea-label" style={{ opacity: assembleProgress > 0.9 ? 1 : 0 }}>
              <span className="label text-blue">THE IDEA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
