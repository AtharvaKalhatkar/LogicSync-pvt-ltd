import React from 'react';
import aquaMockup from '../assets/aqua-mockup.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Featured Case Study</h2>
          <p>Real-world impact through digital transformation.</p>
        </div>
        
        <div className="portfolio-card glass animate-fade-in">
          <div className="portfolio-img">
            <img src={aquaMockup} alt="Bhairavnath Cool Aqua Management System" />
          </div>
          <div className="portfolio-content">
            <span className="portfolio-tag">Enterprise Software</span>
            <h3>Bhairavnath Cool Aqua Management System</h3>
            <p>
              We built a custom, cloud-synchronized management system for a major water delivery business. 
              The solution automated their entire billing cycle, integrated real-time delivery tracking, 
              and provided a robust mobile companion app for drivers.
            </p>
            <ul className="portfolio-features">
              <li>• 40% Increase in Operational Efficiency</li>
              <li>• 100% Data Resilience with Cloud Sync</li>
              <li>• Automated WhatsApp Billing Integration</li>
            </ul>
            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Read Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Portfolio;
