import { Search, PenTool, Code2, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../lib/hooks';

export default function Process() {
  const [ref, visible] = useReveal();

  const steps = [
    {
      num: "01",
      title: "Understand",
      icon: Search,
      subtitle: "Business Problem",
      description: "We visit or meet with you to observe your daily operations, examine your registers, and pinpoint where time and money are leaking.",
      details: ["On-site / virtual audit", "Identify manual bottlenecks", "Map existing data flows"]
    },
    {
      num: "02",
      title: "Design",
      icon: PenTool,
      subtitle: "Business Workflow",
      description: "We map out an optimized, intuitive workflow specifically made for your team — simple enough that anyone can use it without technical training.",
      details: ["Simplified screen flows", "Role-based permissions", "Automated trigger points"]
    },
    {
      num: "03",
      title: "Build",
      icon: Code2,
      subtitle: "Smart System",
      description: "We engineer the desktop software, mobile apps, WhatsApp integrations, and cloud sync using robust, production-tested technology.",
      details: ["Fast & secure architecture", "Real-time sync engines", "WhatsApp & SMS bridges"]
    },
    {
      num: "04",
      title: "Improve",
      icon: TrendingUp,
      subtitle: "Better Operations",
      description: "We deploy the system on your computers and phones, train your team, and provide reliable, direct developer support long after launch.",
      details: ["Hands-on team training", "Zero downtime rollout", "Direct ongoing support"]
    }
  ];

  return (
    <section id="process" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-4 border border-navy/10">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            How We Solve Your Problem
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4">
            A clear, transparent 4-stage engineering process from initial operational chaos to smooth digital execution.
          </p>

          {/* Visual Transformation Stream */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-gray-50 border border-gray-200 p-2 sm:p-3 rounded-2xl text-xs sm:text-sm font-bold shadow-xs">
            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-lg border border-red-200">
              Business Problem
            </span>
            <ArrowRight className="w-4 h-4 text-slate" />
            <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-lg border border-amber-200">
              Business Workflow
            </span>
            <ArrowRight className="w-4 h-4 text-slate" />
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200">
              Smart System
            </span>
            <ArrowRight className="w-4 h-4 text-slate" />
            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg border border-emerald-200">
              Better Operations
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50/70 rounded-3xl p-7 border border-gray-200 hover:bg-white hover:border-orange/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange/5 rounded-bl-full pointer-events-none group-hover:bg-orange/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-navy/20 group-hover:text-orange transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-gray-200 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-orange block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/80 space-y-2">
                  {step.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
