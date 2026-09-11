
import { Link } from 'react-router-dom';
import { useReveal } from '../lib/hooks';
import { Phone } from 'lucide-react';

const CustomCTA = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="bg-navy py-20 text-white">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Don't See Your Industry?
        </h2>
        <p className="text-lg text-white/70">
          That's okay.
        </p>
        <p className="text-xl text-white/90 mt-6 max-w-2xl mx-auto mb-10">
          Tell us how your business works. We'll help design the system around it.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto bg-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-light text-lg transition-colors"
          >
            Discuss Your Business
          </Link>
          <a 
            href="tel:+918390768833" 
            className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 text-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call +91 8390768833
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomCTA;
