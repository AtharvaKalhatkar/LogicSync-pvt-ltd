import React from 'react';
import { Layers, Globe, Cpu, Database } from 'lucide-react';

const Footer = () => {
  const name = "Atharva Kalhatkar";
  const phone = "8390768833";
  const email = "kalhatkaratharva01@gmail.com";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <Layers size={24} className="logo-icon" />
            <span>Logic<span className="sync-text">Sync</span></span>
          </div>
          
          <div className="footer-contact">
            <p><strong>{name}</strong></p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
          
          <div className="footer-socials">
            <a href="#" className="social-link"><Globe size={20} /></a>
            <a href="#" className="social-link"><Cpu size={20} /></a>
            <a href="#" className="social-link"><Database size={20} /></a>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LogicSync Digital. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.5 }}>Built with ❤️ for Small Businesses</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
