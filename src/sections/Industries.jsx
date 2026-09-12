import { 
  ShoppingBag, 
  Package, 
  Truck, 
  Factory, 
  Box, 
  Leaf, 
  Droplets, 
  HardHat, 
  Building2, 
  Home, 
  Mountain, 
  GraduationCap, 
  Heart, 
  Users,
  Navigation
} from 'lucide-react';
import { useReveal } from '../lib/hooks';

export default function Industries() {
  const [ref, visible] = useReveal();

  const industries = [
    { name: "Retail", icon: ShoppingBag, tag: "POS & Inventory" },
    { name: "Wholesale", icon: Package, tag: "Bulk Billing & Ledger" },
    { name: "Distribution", icon: Truck, tag: "Salesman ↔ ERP" },
    { name: "Manufacturing", icon: Factory, tag: "Job Work & BOM" },
    { name: "Packaging", icon: Box, tag: "Box Specs & Roll Stock" },
    { name: "Agriculture", icon: Leaf, tag: "Agro Seeds & Fertilizers" },
    { name: "Water Supply", icon: Droplets, tag: "Jar Logistics & Bottles" },
    { name: "Construction", icon: HardHat, tag: "Machine Meter & Invoicing" },
    { name: "Transport", icon: Navigation, tag: "Fleet & Trip Logs" },
    { name: "Real Estate", icon: Building2, tag: "Brokers & Deal Tracking" },
    { name: "Property Management", icon: Home, tag: "Hostels, PG & Rent" },
    { name: "Stone Crushers", icon: Mountain, tag: "Weighbridge & Stock" },
    { name: "Education", icon: GraduationCap, tag: "Institutes & Portals" },
    { name: "Healthcare", icon: Heart, tag: "Clinics & Records" },
    { name: "Organizations", icon: Users, tag: "Member Management" }
  ];

  return (
    <section id="industries" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-4 border border-navy/10">
            <span>Market Experience</span>
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Built for Real Businesses
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4">
            We work with businesses across core commercial sectors understanding unique operational workflows and building systems that fit like a glove.
          </p>
        </div>

        {/* 15 Industry Cards Grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50/70 rounded-2xl p-5 sm:p-6 border border-gray-200 text-center hover:bg-white hover:border-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 text-navy flex items-center justify-center mb-3 group-hover:bg-orange group-hover:text-white group-hover:border-transparent transition-colors shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-navy group-hover:text-orange transition-colors">
                    {ind.name}
                  </h3>
                  <span className="text-[11px] text-slate font-medium block mt-1">
                    {ind.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
