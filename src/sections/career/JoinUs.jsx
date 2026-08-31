import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function JoinUs() {
  const ref = useScrollReveal();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="join-us-section container section-padding">
      <div className="join-us-content reveal-element">
        <h2 className="join-us-heading">
          MAKE WORK<br />
          THAT MOVES PEOPLE.
          <br /><br />
          AND MOVES<br />
          THE INDUSTRY.
        </h2>
        <button className="btn-primary join-btn" onClick={handleScrollToTop}>
          JOIN DIGIDOOR <span className="arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
