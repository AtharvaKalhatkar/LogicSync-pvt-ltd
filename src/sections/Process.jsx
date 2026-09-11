
import { Fragment } from 'react';
import { Search, PenTool, Code2, TrendingUp, ChevronRight } from 'lucide-react';
import { useReveal } from '../lib/hooks';

export default function Process() {
  const [ref, visible] = useReveal();

  const steps = [
    {
      num: 1,
      title: "Understand",
      icon: Search,
      description: "We understand how your business currently works.",
      label: "Business Problem"
    },
    {
      num: 2,
      title: "Design",
      icon: PenTool,
      description: "We identify problems and design a better workflow.",
      label: "Business Workflow"
    },
    {
      num: 3,
      title: "Build",
      icon: Code2,
      description: "We build the required software, app, automation or AI system.",
      label: "Smart System"
    },
    {
      num: 4,
      title: "Improve",
      icon: TrendingUp,
      description: "We deploy, support and continuously improve the system.",
      label: "Better Operations"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center">How We Solve Your Problem</h2>
        </div>

        <div className={`mt-16 flex flex-col md:flex-row items-center md:items-start justify-between relative transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <Fragment key={index}>
                <div className="flex flex-col items-center text-center w-full md:w-1/4 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-orange text-white font-bold text-xl flex items-center justify-center shadow-md">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-navy mt-4">{step.title}</h3>
                  <p className="text-slate mt-2 text-sm max-w-[200px]">{step.description}</p>
                  <span className="text-xs uppercase tracking-wider text-orange font-semibold mt-3">{step.label}</span>
                </div>
                {!isLast && (
                  <div className="hidden md:flex flex-1 items-center justify-center h-16 w-full -mx-4 z-0">
                    <div className="w-full border-t-2 border-dashed border-orange/40 relative flex justify-end items-center">
                       <ChevronRight className="text-orange/60 absolute -right-3 w-6 h-6 bg-gray-50" />
                    </div>
                  </div>
                )}
                {!isLast && (
                  <div className="md:hidden h-12 border-l-2 border-dashed border-orange/40 my-2"></div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
