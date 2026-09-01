import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container container">
        
        <div className="footer-top">
          <h2 className="footer-heading">Let's build<br />presence.</h2>
          <a href="mailto:hello@digidoor.com" className="footer-email-link">
            hello@digidoor.com
          </a>
        </div>
        
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-label">Navigation</span>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Our Work</Link></li>
              <li><Link to="/approach">Approach</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <span className="footer-label">Socials</span>
            <ul className="footer-links">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <span className="footer-label">Connect</span>
            <ul className="footer-links">
              <li><a href="tel:+917607607279">+91 760 760 7279</a></li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="footer-logo">DIGIDOOR</span>
            <span className="footer-tagline">Real estate marketing, reimagined.</span>
          </div>
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} Digidoor</span>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
