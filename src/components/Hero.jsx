import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge animate-fade-in">
          WELCOME TO LOGICSYNC
        </div>
        <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          IT & Software Solutions <br />
          to Make Your Business <span className="sync-text">Digital</span>
        </h1>
        <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Our goal is to provide efficient, robust software solutions to client business processes. 
          We are a team of highly proficient software engineers in Pune delivering reliable, 
          fast, and scalable applications that grow your enterprise.
        </p>


        <div className="hero-btns animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="btn btn-primary">
            Get a Free Demo <ChevronRight size={20} />
          </button>
          <button className="btn btn-outline">
            <Play size={20} /> Watch Video
          </button>
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
