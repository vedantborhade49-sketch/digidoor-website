import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-cta container">
        <h2 className="footer-cta-heading">
          READY TO MAKE<br />SOMETHING MOVE?
        </h2>
        <Link to="/contact" className="footer-cta-link">
          LET'S TALK <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="footer-main container">
        <div className="footer-brand">
          <span className="label footer-logo">DIGIDOOR</span>
          <p className="footer-tagline">
            Real estate marketing,<br />reimagined.
          </p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-column">
            <span className="footer-column-title">MENU</span>
            <ul className="footer-nav">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/work">OUR WORK</Link></li>
              <li><Link to="/approach">OUR APPROACH</Link></li>
              <li><Link to="/career">CAREER</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <span className="footer-column-title">SOCIAL</span>
            <ul className="footer-nav">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <span className="footer-column-title">CONTACT</span>
            <ul className="footer-nav">
              <li><a href="mailto:hello@digidoor.com">hello@digidoor.com</a></li>
              <li><a href="tel:+917607607279">+91 760 760 7279</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span className="footer-copyright">© {new Date().getFullYear()} DIGIDOOR</span>
        <div className="footer-legal">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
