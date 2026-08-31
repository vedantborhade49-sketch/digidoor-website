import { useScrollReveal } from '../../hooks/useScrollReveal';

const values = [
  {
    title: 'CURIOUS',
    description: 'You want to understand why something works, not just how to make it.'
  },
  {
    title: 'CREATIVE',
    description: 'You see possibilities where others see a blank page.'
  },
  {
    title: 'ACCOUNTABLE',
    description: 'You own your work and your outcomes.'
  },
  {
    title: 'COLLABORATIVE',
    description: 'You know great work rarely happens alone.'
  },
  {
    title: 'ADAPTABLE',
    description: 'You can move between ideas, clients, platforms and priorities.'
  },
  {
    title: 'AMBITIOUS',
    description: 'You want to make work that gets remembered.'
  }
];

export default function WhoWeLookFor() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="who-we-look-for-section container section-padding">
      <div className="who-we-look-for-header reveal-element">
        <span className="label">WHO WE'RE LOOKING FOR</span>
      </div>

      <div className="who-we-look-for-grid">
        {values.map((item, index) => (
          <div 
            key={index} 
            className="who-item reveal-element"
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <h3 className="who-title">{item.title}</h3>
            <p className="body">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
