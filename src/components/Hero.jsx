import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import heroMockup from '../assets/aqua-mockup.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container-grid">
        {/* Left Column: Text Content */}
        <div className="hero-text-content animate-fade-in">
          <div className="hero-badge">
            WELCOME TO LOGICSYNC
          </div>
          <h1>
            IT & Software Solutions <br />
            to Make Your Business <span className="sync-text">Digital</span>
          </h1>
          <p>
            Our goal is to provide efficient, robust software solutions to client business processes. 
            We are a team of highly proficient software engineers in Pune delivering reliable, 
            fast, and scalable applications that grow your enterprise.
          </p>

          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Free Demo <ChevronRight size={20} />
            </button>
            <button className="btn btn-outline" onClick={() => document.getElementById('transition')?.scrollIntoView({ behavior: 'smooth' })}>
              <Play size={20} className="icon-orange" /> Watch Video
            </button>
          </div>
        </div>

        {/* Right Column: Visual Mockup Photo */}
        <div className="hero-visual-content animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="hero-image-wrapper">
            <div className="hero-glow-under"></div>
            <img src={heroMockup} alt="LogicSync IT Solutions Dashboard Mockup" className="hero-mockup-img" />
          </div>
        </div>
      </div>
      
      <div 
        className="scroll-indicator" 
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Scroll Down</span>
        <div className="scroll-icon"></div>
      </div>
      
      <div className="hero-glow-1 animate-pulse-glow"></div>
      <div className="hero-glow-2 animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Hero;
