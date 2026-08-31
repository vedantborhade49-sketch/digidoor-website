import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects, getCategories } from '../../data/projects';
import WorkFilters from './WorkFilters';
import ProjectShowcase from './ProjectShowcase';

export default function FeaturedWork() {
  const ref = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const categories = getCategories();

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="featured-work" ref={ref} className="featured-work full-width-section bg-white text-navy diagonal-cut-bottom">
      <div className="container">
        
        {/* Work Index */}
        <div className="work-index reveal-element">
          <div className="index-col">
            <span className="index-num">{String(projects.length).padStart(2, '0')}</span>
            <span className="index-label">PROJECTS</span>
          </div>
          <div className="index-col">
            <span className="index-num">06</span>
            <span className="index-label">DISCIPLINES</span>
          </div>
          <div className="index-col">
            <span className="index-num">01</span>
            <span className="index-label">APPROACH</span>
          </div>
          <div className="index-col">
            <span className="index-num">∞</span>
            <span className="index-label">POSSIBILITIES</span>
          </div>
        </div>

        <div className="featured-work-header reveal-element">
          <span className="label text-blue">SELECTED WORK</span>
          <h2 className="featured-work-heading">
            A few things<br />
            we've helped move.
          </h2>
        </div>

        {projects.length > 0 ? (
          <>
            {categories.length > 1 && (
              <WorkFilters 
                categories={categories}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
              />
            )}
            <div className="project-list">
              {filteredProjects.map((project, index) => (
                <ProjectShowcase 
                  key={project.slug} 
                  project={project} 
                  index={index} 
                  total={filteredProjects.length} 
                />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state reveal-element" style={{ transitionDelay: '0.2s' }}>
            <h3 className="empty-state-heading">We're preparing the next chapter.</h3>
            <p className="body-large empty-state-body">
              The work lives here soon.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
