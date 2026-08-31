import ContactHero from '../sections/contact/ContactHero';
import ContactFormSection from '../sections/contact/ContactFormSection';

export default function Contact() {
  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ContactHero />
      <ContactFormSection />
    </main>
  );
}
