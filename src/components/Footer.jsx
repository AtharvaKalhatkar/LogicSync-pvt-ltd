
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="font-bold text-xl text-white">
              LogicSync <span className="text-orange">Digital</span>
            </div>
            <p className="text-white/60 text-sm">
              Business Problems. Smart Digital Solutions.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="tel:+918390768833" className="text-white/70 hover:text-orange transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:logicsync.software.sol@gmail.com" className="text-white/70 hover:text-orange transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-orange text-sm transition-colors">About</Link></li>
              <li><Link to="/solutions" className="text-white/70 hover:text-orange text-sm transition-colors">Solutions</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-orange text-sm transition-colors">Products</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-orange text-sm transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-orange text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">Custom Software</li>
              <li className="text-white/70 text-sm">Mobile Apps</li>
              <li className="text-white/70 text-sm">Automation</li>
              <li className="text-white/70 text-sm">AI Solutions</li>
              <li className="text-white/70 text-sm">Digital Transformation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">Manufacturing</li>
              <li className="text-white/70 text-sm">Distribution</li>
              <li className="text-white/70 text-sm">Construction</li>
              <li className="text-white/70 text-sm">Real Estate</li>
              <li className="text-white/70 text-sm">Water Supply</li>
              <li className="text-white/70 text-sm">Agriculture</li>
              <li className="text-white/70 text-sm">and more</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            © 2024 LogicSync Digital. All rights reserved.
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/50 hover:text-orange text-sm transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
