import { useReveal } from '../lib/hooks';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Patil',
    role: 'Owner, Patil Agro Centre',
    quote: 'LogicSync replaced our entire notebook system. Now billing takes 30 seconds, stock is always accurate, and customer udhari is tracked automatically.',
    rating: 5,
    product: 'AgriSync',
  },
  {
    name: 'Suresh Kumar',
    role: 'MD, Kumar Distributors',
    quote: 'VEGA ERP connected our salesmen in the field directly to our warehouse. Orders sync in real-time. We\'ve cut billing errors by 90%.',
    rating: 5,
    product: 'VEGA ERP',
  },
  {
    name: 'Priya Sharma',
    role: 'Property Manager, Sharma Residency',
    quote: 'Monthly rent invoices used to take 2 days. Now it\'s automatic electricity calculated, WhatsApp sent, payment tracked. Game changer.',
    rating: 5,
    product: 'LogicSync Rent',
  },
];

const Testimonials = () => {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange font-bold text-xs uppercase tracking-wider mb-5">
            Client Stories
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Trusted by Business Owners
            <br />
            <span className="text-orange">Across India</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => {
            const Card = () => {
              const [ref, visible] = useReveal();
              return (
                <div
                  ref={ref}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className={`transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-orange/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-orange/20 mb-4 -scale-x-100" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                      ))}
                    </div>
                    
                    {/* Quote text */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-medium">
                      "{t.quote}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center justify-between pt-5 border-t border-gray-200">
                      <div>
                        <div className="font-bold text-navy text-sm">{t.name}</div>
                        <div className="text-slate text-xs mt-0.5">{t.role}</div>
                      </div>
                      <span className="text-[11px] font-bold bg-navy/5 text-navy px-3 py-1 rounded-full">
                        {t.product}
                      </span>
                    </div>
                  </div>
                </div>
              );
            };
            return <Card key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
