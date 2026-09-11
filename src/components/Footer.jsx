import { Layers, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer-top grid grid-4">
          {/* Col 1: Brand */}
          <div className="footer-brand-col">
            <div className="logo footer-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
              <Layers size={26} className="logo-icon" />
              <span>Logic<span className="sync-text">Sync</span></span>
            </div>
            <p className="footer-about-text">
              LogicSync Digital is a technology & software engineering company based in Pune, India. 
              We build custom ERPs, offline-first mobile applications, automated cloud billing, and scalable digital solutions.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#process">Methodology</a></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="footer-products-col">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links-list">
              <li><a href="#products">SyncERP Suite</a></li>
              <li><a href="#products">VyaparSync PWA</a></li>
              <li><a href="#products">BillSync & POS</a></li>
              <li><a href="#products">FleetSync Logistics</a></li>
              <li><a href="#services">Cloud Migrations</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Pune Office</h4>
            <div className="footer-contact-item">
              <MapPin size={16} className="contact-icon" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:logicsync.software.sol@gmail.com">logicsync.software.sol@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="contact-icon" />
              <a href="tel:+918390768833">+91 8390768833</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} LogicSync Digital. All rights reserved.</p>
          <div className="footer-bottom-right">
            <span>Engineered with Precision in Pune</span>
            <button type="button" onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to Top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
