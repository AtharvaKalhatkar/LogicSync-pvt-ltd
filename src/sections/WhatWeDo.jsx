
import { Monitor, Smartphone, Zap, Brain, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../lib/hooks';

export default function WhatWeDo() {
  const [ref, visible] = useReveal();

  const services = [
    {
      title: "Custom Software",
      icon: Monitor,
      description: "Build software according to your exact business workflow.",
      examples: ["ERP", "Management Systems", "Desktop Applications", "Internal Business Tools"]
    },
    {
      title: "Mobile Applications",
      icon: Smartphone,
      description: "Android / cross-platform apps for your team and customers.",
      examples: ["Customer Apps", "Salesman Apps", "Employee Apps", "Driver Apps", "Manager Apps", "Field Team Apps"]
    },
    {
      title: "Business Automation",
      icon: Zap,
      description: "Automate repetitive business work so you can focus on growth.",
      examples: ["Automatic Billing", "Notifications", "Payment Reminders", "Order Processing", "Workflow Automation", "Reports"]
    },
    {
      title: "AI Solutions",
      icon: Brain,
      description: "AI integration for real business use cases — not just buzzwords.",
      examples: ["AI Business Assistant", "Smart Reports", "Data Analysis", "AI-powered Workflows", "Intelligent Automation"]
    },
    {
      title: "Digital Transformation",
      icon: ArrowUpRight,
      description: "Move from manual processes to organized digital systems.",
      examples: ["Process Analysis", "Data Digitization", "Workflow Redesign", "Cloud Migration", "System Integration"]
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center">What We Actually Do</h2>
          <p className="text-slate text-center mt-4 max-w-2xl mx-auto">
            Not just software — complete business systems designed around how you work.
          </p>
        </div>

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            let colClasses = "lg:col-span-2";
            if (index === 3) colClasses = "lg:col-span-2 lg:col-start-2";
            if (index === 4) colClasses = "lg:col-span-2 lg:col-start-4";
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300 md:col-span-1 ${colClasses}`}
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center">
                  <Icon className="text-orange w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mt-4">{service.title}</h3>
                <p className="text-slate mt-2">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.examples.map((example, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                      {example}
                    </span>
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
