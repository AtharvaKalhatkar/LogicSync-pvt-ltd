import React, { useState, useEffect } from 'react';
import { Layers, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/components.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <div className="logo" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Layers size={28} className="logo-icon" />
            <span>Logic<span className="sync-text">Sync</span></span>
          </Link>
        </div>
        
        {/* Mobile Toggle Button */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><HashLink smooth to="/#services" onClick={closeMenu}>Services</HashLink></li>
          <li><HashLink smooth to="/#process" onClick={closeMenu}>Process</HashLink></li>
          <li><HashLink smooth to="/#comparison" onClick={closeMenu}>Compare</HashLink></li>
          <li><HashLink smooth to="/#transition" onClick={closeMenu}>Transition</HashLink></li>
          <li><HashLink smooth to="/#calculator" onClick={closeMenu}>ROI</HashLink></li>
          <li><HashLink smooth to="/#portfolio" onClick={closeMenu}>Case Study</HashLink></li>
          <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
          <li><HashLink smooth to="/#faq" onClick={closeMenu}>FAQ</HashLink></li>
          
          {/* Mobile-Only CTA button */}
          <li className="mobile-cta-li">
            <HashLink smooth to="/#contact" className="btn btn-primary mobile-cta-btn" onClick={closeMenu}>Get a Demo</HashLink>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <HashLink smooth to="/#contact" className="btn btn-primary nav-cta">Get a Demo</HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
