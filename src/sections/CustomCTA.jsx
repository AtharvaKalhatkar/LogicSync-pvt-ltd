import { Link } from 'react-router-dom';
import { useReveal } from '../lib/hooks';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';

const CustomCTA = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="bg-navy py-24 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange/15 rounded-full blur-3xl pointer-events-none" />

      <div 
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange font-bold text-xs uppercase tracking-widest mb-4 border border-white/10">
          Tailored Architecture
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
          Don’t See Your Industry?
        </h2>
        
        <p className="text-xl sm:text-2xl text-orange font-bold mb-4">
          You know your business. We engineer the systems to run it.
        </p>
        
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          No technical knowledge required. Simply walk us through your daily routine and what slows your team down — we will design, build, and deploy a custom digital system engineered completely around your workflow.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto bg-orange text-white px-9 py-4 rounded-xl font-bold hover:bg-orange-dark text-base sm:text-lg shadow-xl hover:shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Discuss Your Workflow</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="tel:+918390768833" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all active:scale-95"
          >
            <Phone className="w-5 h-5 text-orange" />
            <span>Call +91 8390768833</span>
          </a>
        </div>

        <p className="text-white/50 text-xs sm:text-sm mt-8">
          Free 30-Minute Workflow Consultation • Based in Pune, MH • Serving Businesses Across India
        </p>
      </div>
    </section>
  );
};

export default CustomCTA;
