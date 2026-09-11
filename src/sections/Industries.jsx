
import { ShoppingBag, Package, Truck, Factory, Box, Leaf, Droplets, HardHat, Building2, Home, Mountain, GraduationCap, Heart, Users } from 'lucide-react';
import { useReveal } from '../lib/hooks';

export default function Industries() {
  const [ref, visible] = useReveal();

  const industries = [
    { name: "Retail", icon: ShoppingBag },
    { name: "Wholesale", icon: Package },
    { name: "Distribution", icon: Truck },
    { name: "Manufacturing", icon: Factory },
    { name: "Packaging", icon: Box },
    { name: "Agriculture", icon: Leaf },
    { name: "Water Supply", icon: Droplets },
    { name: "Construction", icon: HardHat },
    { name: "Transport", icon: Truck },
    { name: "Real Estate", icon: Building2 },
    { name: "Property Management", icon: Home },
    { name: "Stone Crushers", icon: Mountain },
    { name: "Education", icon: GraduationCap },
    { name: "Healthcare", icon: Heart },
    { name: "Organizations", icon: Users }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center">Built for Real Businesses</h2>
          <p className="text-slate text-center mt-4 max-w-2xl mx-auto">
            We work with businesses across industries — understanding unique workflows and building systems that fit.
          </p>
        </div>

        <div className={`mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-5 border border-gray-200 text-center hover:border-orange hover:shadow-md transition-all duration-300 cursor-default"
              >
                <Icon className="w-10 h-10 mx-auto text-navy mb-3" />
                <span className="text-sm font-medium text-gray-800">{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
