import { useScrollReveal } from '../../hooks/useScrollReveal';

const principles = [
  {
    title: 'THINK TOGETHER',
    description: 'Ideas become stronger when strategy, creative, digital and performance work together.'
  },
  {
    title: 'MOVE FAST',
    description: 'Marketing moves quickly. We value momentum, ownership and the ability to adapt.'
  },
  {
    title: 'CARE ABOUT\nTHE DETAILS',
    description: 'From a headline to a landing page to a campaign dashboard, details matter.'
  },
  {
    title: 'MAKE IT MATTER',
    description: 'We care about the work, but we also care about what the work achieves.'
  }
];

export default function HowWeWork() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="how-we-work-section container section-padding">
      <div className="how-we-work-layout">
        <div className="how-we-work-left reveal-element">
          <span className="label">HOW WE WORK</span>
          <h2 className="how-we-work-heading">
            Good work happens<br />
            when different minds<br />
            move in the same direction.
          </h2>
        </div>

        <div className="how-we-work-list">
          {principles.map((item, index) => (
            <div 
              key={index} 
              className="how-we-work-item reveal-element"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="how-we-work-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="how-we-work-content">
                <h3 className="how-we-work-title">
                  {item.title.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </h3>
                <p className="body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
