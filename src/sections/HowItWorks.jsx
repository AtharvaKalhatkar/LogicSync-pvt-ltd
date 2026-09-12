import { useReveal } from '../lib/hooks';
import { MessageSquare, Code2, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell Us Your Workflow',
    description: 'Walk us through how your business runs day-to-day. No technical jargon needed — just explain what slows your team down.',
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Code2,
    number: '02',
    title: 'We Architect & Build',
    description: 'Our engineers design a custom digital system — desktop ERP, mobile app, or cloud dashboard — tailored precisely to your operations.',
    accent: 'bg-orange/10 text-orange',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy & Go Live',
    description: 'We deploy your system, migrate your data, and train your team. You go live with zero downtime and full support.',
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Ongoing Support',
    description: 'We don\'t disappear after delivery. Continuous updates, feature additions, and priority support — as your business evolves.',
    accent: 'bg-purple-50 text-purple-600',
  },
];

const HowItWorks = () => {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section className="py-24 bg-gray-50/60" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-bold text-xs uppercase tracking-wider mb-5">
            Simple Process
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            From Idea to Live System
            <br />
            <span className="text-orange">in 4 Steps</span>
          </h2>
          <p className="text-slate text-base sm:text-lg mt-5 leading-relaxed">
            No complicated onboarding. No months of waiting. We move fast so your business doesn't have to wait.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const StepCard = () => {
              const [ref, visible] = useReveal();
              return (
                <div
                  ref={ref}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className={`relative group transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Connector line (hidden on last card and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(100%+0px)] w-8 border-t-2 border-dashed border-gray-300 z-0" />
                  )}
                  
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-navy/20 hover:shadow-xl transition-all duration-300 h-full relative z-10">
                    {/* Step number */}
                    <div className="absolute top-6 right-6 text-5xl font-black text-gray-100 select-none">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-2xl ${step.accent} flex items-center justify-center mb-5`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            };
            return <StepCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
