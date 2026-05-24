import React from 'react';
import { Layers, Globe, Cpu, Database } from 'lucide-react';

const Footer = () => {
  const name = "Atharva Kalhatkar";
  const phone = "8390768833";
  const email = "kalhatkaratharva01@gmail.com";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: '1.25rem' }}>
              <Layers size={24} className="logo-icon" />
              <span>Logic<span className="sync-text">Sync</span></span>
            </div>
            <p>
              We are a team of highly proficient software engineers in Pune dedicated 
              to empowering business operations through innovative desktop systems, 
              scalable custom portals, and modern synchronized applications.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link"><Globe size={18} /></a>
              <a href="#" className="social-link"><Cpu size={18} /></a>
              <a href="#" className="social-link"><Database size={18} /></a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <div className="footer-links">
              <a href="#services">Mobile App Design</a>
              <a href="#services">Software Development</a>
              <a href="#services">UI/UX Design</a>
              <a href="#comparison">Compare Systems</a>
              <a href="#faq">F.A.Q. Portal</a>
            </div>
          </div>

          {/* Col 3: Address & Contact */}
          <div className="footer-col">
            <h3>Office & Contact</h3>
            <p>📍 <strong>Address:</strong> Wagholi, Bakori Phata, Near Oxyvalley Phase 2, Pune, Maharashtra</p>
            <p>✉️ <strong>Email:</strong> logicsync.software.sol@gmail.com</p>
            <p>📞 <strong>Phone:</strong> +91 8390768833</p>
            <p>🕒 <strong>Hours:</strong> Week Days: 09:00 AM to 06:00 PM</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LogicSync Digital. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.5 }}>Designed and Developed by LogicSync</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
