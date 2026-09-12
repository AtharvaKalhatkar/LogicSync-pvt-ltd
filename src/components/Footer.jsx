import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUp, Layers, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex items-center tracking-tight text-xl font-extrabold">
                <span className="text-white">LogicSync</span>
                <span className="text-orange ml-1">Digital</span>
              </div>
            </Link>

            <p className="text-orange font-semibold text-sm">
              Business Problems. Smart Digital Solutions.
            </p>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              We design and engineer tailored software, mobile apps, ERPs, automation, and AI workflows for growing Indian businesses.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-white/60">
              <MapPin className="w-4 h-4 text-orange shrink-0" />
              <span>Pune, Maharashtra, India</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="tel:+918390768833" 
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-orange hover:text-white transition-colors"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="mailto:logicsync.software.sol@gmail.com" 
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-orange hover:text-white transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-white/70 hover:text-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/70 hover:text-orange transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-white/70 hover:text-orange transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-orange transition-colors">
                  Case Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/solutions" className="hover:text-orange transition-colors">
                  Custom Software & ERP
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-orange transition-colors">
                  Mobile Applications (Android)
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-orange transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-orange transition-colors">
                  AI Solutions for Business
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-orange transition-colors">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange">
              Key Industries
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/industries" className="hover:text-orange transition-colors">
                  Distribution & Wholesale
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-orange transition-colors">
                  Manufacturing & Packaging
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-orange transition-colors">
                  Construction & Earthmovers
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-orange transition-colors">
                  Real Estate & Rent Systems
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-orange transition-colors">
                  Water Jar Supply & Delivery
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-orange transition-colors">
                  Agriculture & Krushi Kendra
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>
            © 2026 LogicSync Digital. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span>Pune, Maharashtra, India</span>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/60 hover:text-orange transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
