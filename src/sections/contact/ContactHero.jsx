import './ContactHero.css';

export default function ContactHero() {
  return (
    <section className="contact-hero container section">
      <div className="contact-hero-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="label contact-hero-label">CONTACT DIGIDOOR</span>
          <div style={{ height: '1px', width: '30px', backgroundColor: 'var(--color-blue)' }}></div>
        </div>
        <h1 className="contact-hero-heading">
          Let's build<br />something that<br />moves.
        </h1>
        <p className="body contact-hero-body">
          Have a real-estate project, campaign or idea in mind? Tell us what you're building. We'd love to hear it.
        </p>
      </div>
    </section>
  );
}
