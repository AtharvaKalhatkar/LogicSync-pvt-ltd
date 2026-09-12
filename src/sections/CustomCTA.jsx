import { Link } from 'react-router-dom';
import { useReveal } from '../lib/hooks';
import { ArrowRight, Phone } from 'lucide-react';

const CustomCTA = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="py-24 bg-white" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-navy" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          
          {/* Content */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              You Know Your Business.
              <br />
              <span className="text-orange">We Engineer the Systems to Run It.</span>
            </h2>
            
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              No technical knowledge required. Walk us through your daily routine and what slows your team down we'll design, build, and deploy a system engineered around your workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="group w-full sm:w-auto bg-orange text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-orange-dark active:scale-[0.98] shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918390768833"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-orange" />
                <span>+91 8390768833</span>
              </a>
            </div>

            <p className="text-white/40 text-xs sm:text-sm mt-10">
              Free 30-Minute Consultation • Based in Pune, MH • Serving Businesses Across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCTA;
