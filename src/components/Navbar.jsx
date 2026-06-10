import React, { useState, useEffect } from 'react';
import { Layers, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/components.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const scrollToSection = (id) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and render, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <div className="logo" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/'); }} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Layers size={28} className="logo-icon" />
            <span>Logic<span className="sync-text">Sync</span></span>
          </div>
        </div>
        
        {/* Mobile Toggle Button */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><button className="nav-btn-link" onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button className="nav-btn-link" onClick={() => scrollToSection('process')}>Process</button></li>
          <li><button className="nav-btn-link" onClick={() => scrollToSection('comparison')}>Compare</button></li>
          <li><button className="nav-btn-link" onClick={() => scrollToSection('transition')}>Transition</button></li>
          <li><button className="nav-btn-link" onClick={() => scrollToSection('calculator')}>ROI</button></li>
          <li><button className="nav-btn-link" onClick={() => scrollToSection('portfolio')}>Case Study</button></li>
          <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
          <li><button className="nav-btn-link" onClick={() => scrollToSection('faq')}>FAQ</button></li>
          
          {/* Mobile-Only CTA button */}
          <li className="mobile-cta-li">
            <button className="btn btn-primary mobile-cta-btn" onClick={() => scrollToSection('contact')}>Get a Demo</button>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <button onClick={() => scrollToSection('contact')} className="btn btn-primary nav-cta">Get a Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
