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
  
  const totalStages = approachStages.length;
  const activeIndex = Math.min(
    Math.floor(progress * totalStages),
    totalStages - 1
  );

  const activeStage = approachStages[activeIndex];

  return (
    <section id="approach-journey" ref={ref} className="approach-journey-wrapper full-width-section bg-white text-navy">
      
      {/* DESKTOP STICKY VERSION */}
      <div className="approach-journey-sticky desktop-only">
        <div className="container approach-journey-layout">
          
          {/* Left Side (30%): Content */}
          <div className="journey-content-side">
             <div className="journey-text-content">
                <span className="label journey-label text-blue">
                  {activeStage.number} / {activeStage.title}
                </span>
                
                <h2 key={`h2-${activeIndex}`} className="journey-heading animate-fade-up">
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

             <div className="journey-progress-indicator">
                {approachStages.map((stage, idx) => (
                  <div key={idx} className={`indicator-item ${idx === activeIndex ? 'active' : ''}`}>
                    <span className="indicator-num">{stage.number}</span>
                    <span className="indicator-name">{stage.title}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Right Side (70%): Visual System */}
          <div className={`journey-visual-side stage-${activeIndex}`}>
             <div className="visual-canvas">
                
                {/* 
                  Nodes logic:
                  Stage 0: PROJECT, MARKET, AUDIENCE, PLACE, COMPETITION, OBJECTIVE
                  Stage 1: Reorganize to INSIGHT, POSITIONING, AUDIENCE, OPPORTUNITY
                  Stage 2: Linear INSIGHT -> POSITIONING -> MESSAGE -> CHANNEL
                  Stage 3: Strategy to Idea -> Typography, Shapes, Layouts
                  Stage 4: Idea to Communication Tree -> SOCIAL, DIGITAL, OOH -> CONTENT, WEBSITE, CAMPAIGN
                  Stage 5: Activation -> Signals running down tree
                  Stage 6: Loop -> IDEA -> MARKET -> DATA -> LEARNING -> OPTIMIZATION
                */}
                
                {/* Stage 0-1-2 Base Nodes */}
                <div className="v-node node-project">PROJECT</div>
                <div className="v-node node-market">MARKET</div>
                <div className="v-node node-audience">AUDIENCE</div>
                <div className="v-node node-place">PLACE</div>
                <div className="v-node node-competition">COMPETITION</div>
                <div className="v-node node-objective">OBJECTIVE</div>
                
                {/* Stage 1-2 Derived Nodes */}
                <div className="v-node node-insight">INSIGHT</div>
                <div className="v-node node-positioning">POSITIONING</div>
                <div className="v-node node-opportunity">OPPORTUNITY</div>
                <div className="v-node node-message">MESSAGE</div>
                <div className="v-node node-channel">CHANNEL</div>
                
                {/* Connecting Lines for Paths */}
                <div className="v-path path-1"></div>
                <div className="v-path path-2"></div>
                <div className="v-path path-3"></div>
                
                {/* Stage 3 Creative Nodes */}
                <div className="v-shape shape-circle"></div>
                <div className="v-shape shape-rect"></div>
                <div className="v-node node-typography">TYPOGRAPHY</div>
                <div className="v-node node-visual">VISUAL</div>
                <div className="v-node node-motion">MOTION</div>
                <div className="v-node node-idea-main">IDEA</div>
                
                {/* Stage 4 Communication Branches */}
                <div className="v-tree tree-social">SOCIAL</div>
                <div className="v-tree tree-digital">DIGITAL</div>
                <div className="v-tree tree-ooh">OOH</div>
                <div className="v-tree tree-content">CONTENT</div>
                <div className="v-tree tree-website">WEBSITE</div>
                <div className="v-tree tree-campaign">CAMPAIGN</div>
                
                {/* Stage 5 Activation Signals */}
                <div className="v-signal sig-1"></div>
                <div className="v-signal sig-2"></div>
                <div className="v-signal sig-3"></div>
                
                {/* Stage 6 Measurement Loop */}
                <div className="v-loop-track"></div>
                <div className="v-loop-node loop-market">MARKET</div>
                <div className="v-loop-node loop-data">DATA</div>
                <div className="v-loop-node loop-learning">LEARNING</div>
                <div className="v-loop-node loop-optimization">OPTIMIZATION</div>

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
              <div className="mobile-journey-visual-min">
                 <div className="min-num">{stage.number}</div>
                 {index < approachStages.length - 1 && <div className="min-line"></div>}
              </div>
              
              <div className="mobile-journey-content">
                <span className="label text-blue">{stage.title}</span>
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
