import { useReveal } from '../lib/hooks';
import { ShieldCheck, Award, MapPin } from 'lucide-react';

const TrustBar = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="py-12 bg-white border-y border-gray-100" id="milestones">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>MSME Registered (UDYAM-MH-26-1144939)</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
            <Award className="w-5 h-5 text-orange" />
            <span>Govt. of Maharashtra Verified</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
            <MapPin className="w-5 h-5 text-navy" />
            <span>Based in Pune, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
