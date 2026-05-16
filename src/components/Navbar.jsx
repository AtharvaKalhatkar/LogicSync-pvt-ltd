import React, { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';

import '../styles/components.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Layers size={32} className="logo-icon" />
          <span>Logic<span className="sync-text">Sync</span></span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#comparison">Compare</a></li>
          <li><a href="#calculator">ROI Savings</a></li>
          <li><a href="#portfolio">Case Study</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>



        
        <a href="#contact" className="btn btn-primary nav-cta">Get a Demo</a>
      </div>
    </nav>
  );
};


export default Navbar;
