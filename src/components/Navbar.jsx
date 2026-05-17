import React, { useState, useEffect } from 'react';
import { Layers, Menu, X } from 'lucide-react';
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
          <Layers size={28} className="logo-icon" />
          <span>Logic<span className="sync-text">Sync</span></span>
        </div>
        
        {/* Mobile Toggle Button */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#process" onClick={closeMenu}>Process</a></li>
          <li><a href="#comparison" onClick={closeMenu}>Compare</a></li>
          <li><a href="#transition" onClick={closeMenu}>Transition</a></li>
          <li><a href="#calculator" onClick={closeMenu}>ROI Savings</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Case Study</a></li>
          <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          
          {/* Mobile-Only CTA button */}
          <li className="mobile-cta-li">
            <a href="#contact" className="btn btn-primary mobile-cta-btn" onClick={closeMenu}>Get a Demo</a>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <a href="#contact" className="btn btn-primary nav-cta">Get a Demo</a>
      </div>
    </nav>
  );
};

export default Navbar;
