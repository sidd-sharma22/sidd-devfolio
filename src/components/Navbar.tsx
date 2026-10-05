import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`} aria-label="Primary navigation">
      <div className="site-container site-nav__inner">
        <a href="#" className="site-nav__brand">
          <span className="site-nav__brand-mark">&lt;</span>
          Siddharth&apos;s Portfolio
          <span className="site-nav__brand-mark">/&gt;</span>
        </a>

        <div className="site-nav__desktop-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </a>
          ))}
          <a href="/Sidd_Resume_AI.pdf" download="Sidd_Resume.pdf" className="button button--small">
            Resume
          </a>
        </div>

        <button
          className="site-nav__menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="site-nav__mobile-menu glass-panel">
          <div className="site-nav__mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="site-nav__mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Sidd_Resume_AI.pdf"
              download="Sidd_Resume.pdf"
              className="button button--small"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
