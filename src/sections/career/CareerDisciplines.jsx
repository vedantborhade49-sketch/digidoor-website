import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const disciplines = [
  {
    title: 'CREATIVE & ART DIRECTION',
    description: 'Concepts, campaign ideas and visual worlds that give real-estate projects a distinct personality.\n\nFrom a single campaign thought to an entire visual language, creative turns strategy into something people can see and feel.',
  },
  {
    title: 'BRAND & COMMUNICATION',
    description: 'We shape how projects speak, look and position themselves in the market.\n\nFrom brand positioning and naming to campaign messaging, communication systems and launch narratives.',
  },
  {
    title: 'DIGITAL MARKETING',
    description: 'We build digital visibility around real-estate brands across the platforms where audiences spend their time.\n\nSocial media, digital campaigns, content ecosystems and always-on communication come together to keep brands relevant.',
  },
  {
    title: 'PERFORMANCE MARKETING',
    description: 'Creativity gets attention. Performance turns attention into measurable action.\n\nWe plan, launch and optimize campaigns across digital channels with a focus on qualified leads, efficiency and business growth.',
  },
  {
    title: 'CONTENT & SOCIAL',
    description: 'Real estate needs more than property photographs.\n\nWe create content systems that bring projects to life through social media, video, storytelling, campaigns and ongoing brand communication.',
  },
  {
    title: 'DIGITAL EXPERIENCES',
    description: 'Websites and landing experiences are often the first real interaction between a buyer and a project.\n\nWe design digital experiences that combine storytelling, visual design, usability and conversion.',
  },
  {
    title: 'PROJECT MARKETING',
    description: 'We help projects enter the market with clarity and momentum.\n\nFrom pre-launch strategy to launch campaigns and ongoing marketing, we connect brand, creative, media and performance into one commercial story.',
  }
];

export default function CareerDisciplines() {
  const ref = useScrollReveal();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="career-disciplines container section-padding">
      <div className="career-disciplines-header reveal-element">
        <span className="label">WHAT WE DO</span>
        <h2 className="career-disciplines-heading">
          Different disciplines.<br />
          One ambition.<br />
          Make real estate matter.
        </h2>
      </div>

      <div className="career-disciplines-list">
        {disciplines.map((item, index) => (
          <div 
            key={index} 
            className={`discipline-row reveal-element ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
            tabIndex={0}
            onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') toggleExpand(index); }}
            aria-expanded={expandedIndex === index}
            style={{ transitionDelay: `${0.05 * index}s` }}
          >
            <div className="discipline-header">
              <span className="discipline-number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="discipline-title">{item.title}</h3>
              <span className="discipline-arrow" aria-hidden="true">→</span>
            </div>
            
            <div className="discipline-body-wrapper">
              <div className="discipline-body">
                {item.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="body">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
