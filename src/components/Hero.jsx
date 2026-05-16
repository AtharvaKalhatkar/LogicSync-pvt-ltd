import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge animate-fade-in">
          New: LogicSync v2.0 is now live
        </div>
        <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Modernizing Small Business <br />
          with <span className="sync-text">LogicSync</span>
        </h1>
        <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          We digitize traditional businesses by building custom software that syncs 
          your offline operations with the cloud. Say goodbye to manual paperwork 
          and hello to real-time efficiency.
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
      
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
    </section>
  );
};


export default Hero;
