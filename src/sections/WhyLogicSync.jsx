
import { Target, Smile, Settings, Zap, Brain, Handshake } from 'lucide-react';
import { useReveal } from '../lib/hooks';

export default function WhyLogicSync() {
  const [ref, visible] = useReveal();

  const reasons = [
    {
      title: "Built Around Your Business",
      icon: Target,
      description: "We adapt the system to your workflow — not the other way around."
    },
    {
      title: "Easy to Use",
      icon: Smile,
      description: "Technology should simplify work, not complicate it."
    },
    {
      title: "Custom Solutions",
      icon: Settings,
      description: "No unnecessary features. Only what your business actually needs."
    },
    {
      title: "Automation First",
      icon: Zap,
      description: "Reduce repetitive manual work across your operations."
    },
    {
      title: "AI Ready",
      icon: Brain,
      description: "Integrate intelligent features where they actually add value."
    },
    {
      title: "Long-Term Support",
      icon: Handshake,
      description: "We build relationships, not just software."
    }
  ];

  return (
    <section id="why-logicsync" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center">Why Businesses Choose LogicSync</h2>
        </div>

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
                  <Icon className="text-orange w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mt-4">{reason.title}</h3>
                <p className="text-slate mt-2">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
