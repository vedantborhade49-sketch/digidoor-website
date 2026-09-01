import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useFrameSequence } from './hero/useFrameSequence';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Work', path: '/work' },
  { name: 'Our Approach', path: '/approach' },
  { name: 'Career', path: '/career' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalFrames } = useFrameSequence();

  // Handle scroll to change navbar visual state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (location.pathname === '/') {
        // Hero unpins after scrolling past (totalFrames * 20) pixels
        const threshold = totalFrames * 20;
        setIsHidden(window.scrollY < threshold);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img 
            src={isScrolled ? "/logo.png" : "/logo-white.png"} 
            alt="DIGIDOOR" 
            style={{ height: '40px', width: 'auto' }} 
          />
        </Link>
        
        <nav className="navbar-desktop-menu" aria-label="Main Navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => `navbar-link nav-text ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `navbar-cta nav-text ${isActive ? 'active' : ''}`}
          >
            Contact Us <span className="arrow" aria-hidden="true">→</span>
          </NavLink>
        </nav>

        <button 
          className="navbar-mobile-toggle" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <nav className="navbar-mobile-content container" aria-label="Mobile Navigation">
          <ul className="navbar-mobile-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => `h2 ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `h2 mobile-cta ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us <span className="arrow" aria-hidden="true">→</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
