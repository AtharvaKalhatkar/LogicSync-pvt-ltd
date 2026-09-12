import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, Layers } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-white py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-orange group-hover:scale-105 transition-transform duration-200 shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center tracking-tight text-xl font-extrabold">
                  <span className="text-navy">LogicSync</span>
                  <span className="text-orange ml-1">Digital</span>
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate -mt-1 hidden sm:block">
                  Business Systems • AI
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm font-semibold transition-colors py-1 ${
                      isActive
                        ? 'text-orange font-bold'
                        : 'text-gray-700 hover:text-navy'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange rounded-full animate-fade-in" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Direct Phone */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+918390768833"
                className="flex items-center gap-2 text-sm font-semibold text-slate hover:text-navy transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <Phone className="w-4 h-4 text-orange" />
                <span>+91 8390768833</span>
              </a>
              <Link
                to="/contact"
                className="bg-orange text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-orange-dark active:scale-95 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-navy p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col pt-24 pb-20 px-6 overflow-y-auto`}
      >
        <nav className="flex flex-col gap-4 mt-4">
          <Link
            to="/"
            className="text-2xl font-bold text-navy hover:text-orange py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-bold py-2 border-b border-gray-100 flex items-center justify-between ${
                location.pathname === link.path ? 'text-orange' : 'text-navy'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{link.name}</span>
              <ArrowRight className="w-4 h-4 opacity-40" />
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full text-center bg-orange text-white py-3.5 rounded-xl font-bold text-base shadow-md flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Book a Consultation</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+918390768833"
              className="w-full text-center border-2 border-navy text-navy py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            >
              <Phone size={16} className="text-orange" />
              <span>Call: +91 8390768833</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40 flex gap-2">
        <a
          href="https://wa.me/918390768833"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-orange text-white py-3 rounded-xl font-bold text-sm flex justify-center items-center gap-2 shadow-md hover:bg-orange-dark"
        >
          <Phone size={18} />
          <span>Talk to Us</span>
        </a>
        <Link
          to="/contact"
          className="flex-1 bg-navy text-white py-3 rounded-xl font-bold text-sm flex justify-center items-center gap-1 shadow-md hover:bg-navy-light"
        >
          <span>Get Started</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
