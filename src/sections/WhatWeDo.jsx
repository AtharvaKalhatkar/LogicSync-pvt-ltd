import { Monitor, Smartphone, Zap, Brain, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../lib/hooks';

export default function WhatWeDo() {
  const [ref, visible] = useReveal();

  const services = [
    {
      title: "1. Custom Software",
      icon: Monitor,
      headline: "Built for Your Exact Process",
      description: "We design and build desktop software, web applications, and internal ERP platforms tailored to your business rules — not off-the-shelf compromises.",
      examples: ["Custom ERP Platforms", "Inventory & Stock Control", "Desktop Billing Systems", "Internal Operations Dashboards"]
    },
    {
      title: "2. Mobile Applications",
      icon: Smartphone,
      headline: "For Your Teams & Customers",
      description: "High-performance Android and cross-platform mobile apps for field staff, delivery drivers, salesmen, and customers with offline capabilities.",
      examples: ["Salesman Order Booking", "Driver Delivery & GPS", "Customer Self-Service", "Manager Field Dashboards"]
    },
    {
      title: "3. Business Automation",
      icon: Zap,
      headline: "Zero Repetitive Work",
      description: "Connect your disjointed processes into seamless automatic triggers. Cut hours spent on manual invoicing, ledger entries, and payment follow-ups.",
      examples: ["Automated WhatsApp Invoicing", "Instant Payment Reminders", "Order-to-Delivery Pipelines", "Automated Daily P&L Reports"]
    },
    {
      title: "4. AI Solutions",
      icon: Brain,
      headline: "Practical Business Intelligence",
      description: "Real-world AI integration that delivers tangible ROI — from automated document parsing to voice-assisted data entry and smart inventory predictions.",
      examples: ["Bill & Receipt OCR", "Automated Business Summaries", "Smart Demand Forecasting", "Internal Knowledge Assistants"]
    },
    {
      title: "5. Digital Transformation",
      icon: ArrowUpRight,
      headline: "From Paper to Modern Cloud",
      description: "We sit down with you, study your books and physical workflows, digitize historical records, and transition your team smoothly without disruption.",
      examples: ["Workflow Audit & Mapping", "Paper to Cloud Migration", "Team Training & Onboarding", "Continuous Optimization"]
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-4 border border-orange/20">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            What We Actually Do
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4">
            We don't sell generic software boxes. We analyze where your business loses time and money, then construct reliable digital systems around your operations.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  index === 3 ? 'lg:col-start-1 lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange/10 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-slate uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">
                      {service.headline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-gray-100 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate block mb-2">
                      Key Deliverables
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((example, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-lg"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-orange hover:text-orange-dark group-hover:translate-x-1 transition-all"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
