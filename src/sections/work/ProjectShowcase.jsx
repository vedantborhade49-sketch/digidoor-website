import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function ProjectShowcase({ project, index, total }) {
  const ref = useScrollReveal();
  
  const formattedIndex = String(index + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  // We support: featured, left, right, full, split, dark
  const layoutClass = `layout-${project.layout || 'left'}`;

  const renderContent = () => {
    if (project.layout === 'dark') {
      return (
        <div className="dark-project-content">
          <div className="dark-bg-layer"></div>
          <div className="dark-project-inner container">
            <div className="dark-image-col">
              <img src={project.heroImage} alt={project.title} className="parallax-image" loading="lazy" />
            </div>
            <div className="dark-text-col project-info">
              <div className="project-meta">
                <span className="project-number text-blue">{formattedIndex} / {formattedTotal}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3 className="project-title text-white">{project.title}</h3>
              <p className="project-description body">{project.overview}</p>
              <Link to={`/work/${project.slug}`} className="btn-text project-link text-white">
                VIEW PROJECT <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (project.layout === 'featured') {
      return (
        <div className="featured-project-inner">
          <div className="project-image-wrapper clip-reveal">
            <Link to={`/work/${project.slug}`} className="project-image-link custom-cursor-trigger">
              <div className="project-image-inner parallax-wrapper">
                <img src={project.heroImage} alt={project.title} className="project-image parallax-image" loading="lazy" />
              </div>
              <div className="project-hover-overlay"></div>
            </Link>
          </div>
          <div className="project-info featured-info">
            <div className="project-meta">
              <span className="project-number">{formattedIndex}</span>
            </div>
            <div className="info-main">
              <span className="project-category text-blue">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description body">{project.overview}</p>
              <Link to={`/work/${project.slug}`} className="btn-text project-link">
                VIEW PROJECT <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    // Default, left, right, split, full
    return (
      <div className="standard-project-inner">
        <div className="project-image-wrapper clip-reveal">
          <Link to={`/work/${project.slug}`} className="project-image-link custom-cursor-trigger">
            <div className="project-image-inner parallax-wrapper">
              <img src={project.heroImage} alt={project.title} className="project-image parallax-image" loading="lazy" />
            </div>
            <div className="project-hover-overlay"></div>
          </Link>
        </div>

        <div className="project-info">
          <div className="project-meta">
            <span className="project-number">{formattedIndex} / {formattedTotal}</span>
          </div>
          <span className="project-category text-blue">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description body">{project.overview}</p>
          <Link to={`/work/${project.slug}`} className="btn-text project-link">
            VIEW PROJECT <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    );
  };

  // The dark layout breaks out of the container to be full width
  if (project.layout === 'dark') {
    return (
      <article ref={ref} className={`project-showcase reveal-element ${layoutClass} full-width-breakout`}>
        {renderContent()}
      </article>
    );
  }

  return (
    <article ref={ref} className={`project-showcase reveal-element ${layoutClass}`}>
      {renderContent()}
    </article>
  );
}
