import { Target, Smile, Settings, Zap, Brain, Handshake, Check } from 'lucide-react';
import { useReveal } from '../lib/hooks';

export default function WhyLogicSync() {
  const [ref, visible] = useReveal();

  const reasons = [
    {
      title: "Built Around Your Business",
      icon: Target,
      tagline: "Tailored to Your Workflow",
      description: "We adapt the digital system to how you already work, rather than forcing you to change your operations to fit inflexible generic software.",
      benefit: "Zero friction adoption for your existing staff"
    },
    {
      title: "Easy to Use",
      icon: Smile,
      tagline: "Simplicity by Design",
      description: "Technology should simplify everyday work, not complicate it. Screens are clean, fast, and designed for non-technical users.",
      benefit: "Staff can learn it in less than 30 minutes"
    },
    {
      title: "Custom Solutions",
      icon: Settings,
      tagline: "Zero Feature Clutter",
      description: "No unnecessary bloated menus or irrelevant modules. You only pay for and see what your business actually needs and uses daily.",
      benefit: "Clean, lightning-fast, and distraction-free"
    },
    {
      title: "Automation First",
      icon: Zap,
      tagline: "Kill Repetitive Work",
      description: "From auto-generating GST bills to dispatching WhatsApp balance notices, we eliminate repetitive manual data entry completely.",
      benefit: "Save 3+ hours of manual clerical work daily"
    },
    {
      title: "AI Ready",
      icon: Brain,
      tagline: "Practical Intelligence",
      description: "Integrate intelligent features like automatic paper bill OCR, voice data entry, and smart forecasting where they actually drive profit.",
      benefit: "Tangible ROI, not speculative tech demos"
    },
    {
      title: "Long-Term Support",
      icon: Handshake,
      tagline: "Direct Partner Relationship",
      description: "We build relationships, not just software. You speak directly with the engineering team, ensuring immediate assistance whenever required.",
      benefit: "Direct developer access without call center loops"
    }
  ];

  return (
    <section id="why-logicsync" className="py-24 bg-gray-50/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-4 border border-navy/10">
            <span>The LogicSync Edge</span>
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Why Businesses Choose LogicSync
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4">
            We bridge the gap between complex software engineering and practical, ground-level Indian business operations.
          </p>
        </div>

        {/* 6 Value Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange/10 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold text-slate uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">
                      {reason.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-navy">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{reason.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
