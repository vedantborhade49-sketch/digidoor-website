import { useScrollProgress } from '../../hooks/useScrollProgress';

export const approachStages = [
  {
    number: "01",
    title: "UNDERSTAND",
    headline: "Before we make anything,\nwe understand everything.",
    copy: "We start with the project, the market,\nthe audience, the competition and the\nbusiness objective.\n\nWhat is being built?\n\nWho is it for?\n\nWhy should anyone care?\n\nWhat does success actually look like?"
  },
  {
    number: "02",
    title: "DEFINE",
    headline: "We find the opportunity\ninside the problem.",
    copy: "Research becomes clarity.\n\nWe identify the positioning,\naudience tension, opportunity and\nreason to believe.\n\nThis is where a project starts becoming\na brand with something meaningful to say."
  },
  {
    number: "03",
    title: "STRATEGIZE",
    headline: "A clear strategy\ngives creativity somewhere to go.",
    copy: "We turn insight into direction.\n\nPositioning, messaging, channel strategy,\ncampaign architecture and the path from\nattention to action.\n\nThe strategy becomes the filter\nfor every decision that follows."
  },
  {
    number: "04",
    title: "CREATE",
    headline: "Then comes the idea.",
    copy: "This is where strategy becomes something\npeople can see, feel and remember.\n\nCampaign concepts.\nVisual identities.\nArt direction.\nCopy.\nContent.\nMotion.\n\nThe idea gives the strategy a voice."
  },
  {
    number: "05",
    title: "COMMUNICATE",
    headline: "One idea.\nMany ways to experience it.",
    copy: "A campaign is bigger than one advertisement.\n\nThe central idea becomes a communication\nsystem across social, digital, content,\nwebsites, outdoor, launch assets and\neverywhere the audience meets the brand."
  },
  {
    number: "06",
    title: "ACTIVATE",
    headline: "Good creative gets attention.\n\nSmart activation gets results.",
    copy: "We put the work into the market.\n\nDigital campaigns, paid media, social,\nsearch, content, landing experiences and\nperformance marketing work together to\ncreate demand and action."
  },
  {
    number: "07",
    title: "MEASURE & GROW",
    headline: "The launch isn't\nthe finish line.",
    copy: "We measure what happened.\n\nWhat worked?\nWhat didn't?\nWhere did people respond?\nWhere did they drop off?\nWhat can we improve?\n\nPerformance feeds learning.\nLearning feeds the next decision."
  }
];

export default function ApproachJourney() {
  const { ref, progress } = useScrollProgress({ offsetTop: 0 });
  
  // Calculate active index (0 to 6)
  const totalStages = approachStages.length;
  const activeIndex = Math.min(
    Math.floor(progress * totalStages),
    totalStages - 1
  );

  const activeStage = approachStages[activeIndex];

  return (
    <section id="approach-journey" ref={ref} className="approach-journey-wrapper">
      
      {/* DESKTOP STICKY VERSION */}
      <div className="approach-journey-sticky desktop-only">
        <div className="container approach-journey-layout">
          
          {/* Left Side: Content */}
          <div className="journey-content-side">
             <div className="journey-progress-indicator">
                {approachStages.map((stage, idx) => (
                  <div 
                    key={idx} 
                    className={`progress-dot ${idx === activeIndex ? 'active' : ''} ${idx < activeIndex ? 'completed' : ''}`}
                  ></div>
                ))}
             </div>
             
             <div className="journey-text-content">
                <span className="label journey-label text-blue">
                  {activeStage.number} / {activeStage.title}
                </span>
                
                <h2 key={`h2-${activeIndex}`} className="journey-heading h2 animate-fade-up">
                  {activeStage.headline.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </h2>
                
                <div key={`p-${activeIndex}`} className="journey-body body animate-fade-up-delay">
                  {activeStage.copy.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </div>
             </div>
          </div>

          {/* Right Side: Visual System */}
          <div className={`journey-visual-side stage-${activeIndex}`}>
             <div className="visual-canvas">
                
                {/* Abstract system elements that transform based on activeIndex via CSS */}
                <div className="v-node v-project">PROJECT</div>
                
                <div className="v-node v-market">MARKET</div>
                <div className="v-node v-audience">AUDIENCE</div>
                <div className="v-node v-comp">COMPETITION</div>
                
                <div className="v-node v-insight">INSIGHT</div>
                <div className="v-node v-strategy">STRATEGY</div>
                <div className="v-node v-idea">IDEA</div>
                
                <div className="v-node v-social">SOCIAL</div>
                <div className="v-node v-digital">DIGITAL</div>
                <div className="v-node v-ooh">OOH</div>
                
                <div className="v-line v-line-1"></div>
                <div className="v-line v-line-2"></div>
                <div className="v-line v-line-3"></div>
                <div className="v-line v-line-4"></div>
                
                <div className="v-circle v-circle-burst"></div>
                <div className="v-circle v-loop"></div>
                
                <div className="v-signal v-signal-1"></div>
                <div className="v-signal v-signal-2"></div>
                
                <div className="v-node v-data">DATA</div>
                <div className="v-node v-learn">LEARNING</div>
             </div>
          </div>

        </div>
      </div>

      {/* MOBILE VERTICAL VERSION */}
      <div className="approach-journey-mobile mobile-only container section-padding">
        <div className="mobile-journey-header reveal-element">
          <span className="label text-blue">THE JOURNEY</span>
        </div>
        
        <div className="mobile-journey-list">
          {approachStages.map((stage, index) => (
            <div key={index} className="mobile-journey-item reveal-element">
              <div className="mobile-journey-visual-min stage-mobile">
                 {/* Mini visual representation of the stage */}
                 <div className="min-dot"></div>
                 {index < approachStages.length - 1 && <div className="min-line"></div>}
              </div>
              
              <div className="mobile-journey-content">
                <span className="label text-blue">{stage.number} / {stage.title}</span>
                <h3 className="h3" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                  {stage.headline.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </h3>
                <div className="body">
                  {stage.copy.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
