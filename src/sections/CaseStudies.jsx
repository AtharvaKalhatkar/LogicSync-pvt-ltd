import { Droplets, Smartphone, Home, ArrowRight, CheckCircle2, Store } from 'lucide-react';
import { useReveal } from '../lib/hooks';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const [headerRef, headerVisible] = useReveal();
  const [card1Ref, card1Visible] = useReveal();
  const [card2Ref, card2Visible] = useReveal();
  const [card3Ref, card3Visible] = useReveal();
  const [card4Ref, card4Visible] = useReveal();

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          ref={headerRef} 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-4 border border-navy/10">
            <span>Real Implementations</span>
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            From Problem → To Working System
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4">
            Real businesses. Real workflows. Real working solutions engineered and deployed on the ground.
          </p>
        </div>

        {/* 4 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Case Study 1: Bhairavnath Cool Aqua */}
          <div 
            ref={card1Ref} 
            className={`bg-gray-50/70 rounded-3xl border border-gray-200 p-8 flex flex-col justify-between hover:bg-white hover:border-orange/60 hover:shadow-xl transition-all duration-500 ${
              card1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Droplets className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Water Supply & Logistics
                </span>
              </div>

              <h3 className="text-2xl font-black text-navy mb-4">
                Bhairavnath Cool Aqua
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-red-600 font-bold block mb-1">
                    Problem
                  </span>
                  <p className="text-gray-800 text-sm">
                    Manual water jar delivery records, missing bottle counts, and painful month-end manual billing on paper registers.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-orange font-bold block mb-1">
                    Solution
                  </span>
                  <p className="text-gray-800 text-sm">
                    Desktop admin system + mobile driver delivery app + instant cloud synchronization.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-emerald-600 font-bold block mb-1">
                    Result
                  </span>
                  <p className="text-gray-800 text-sm font-medium">
                    Digitized delivery, bottle tracking, instant WhatsApp invoicing, and organized customer management workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 text-xs font-bold text-slate">
              Architecture: Desktop ERP ↔ Driver Mobile App ↔ Cloud
            </div>
          </div>

          {/* Case Study 2: Dukan Setu */}
          <div 
            ref={card2Ref} 
            style={{ transitionDelay: '100ms' }}
            className={`bg-gray-50/70 rounded-3xl border border-gray-200 p-8 flex flex-col justify-between hover:bg-white hover:border-orange/60 hover:shadow-xl transition-all duration-500 ${
              card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange/10 text-orange flex items-center justify-center">
                  <Store className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange bg-orange/10 px-3 py-1 rounded-full border border-orange/20">
                  Retail & Khata Automation
                </span>
              </div>

              <h3 className="text-2xl font-black text-navy mb-4">
                Dukan Setu
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-red-600 font-bold block mb-1">
                    Problem
                  </span>
                  <p className="text-gray-800 text-sm">
                    Local retailers struggling with manual handwritten registers, lost customer udhari balances, and slow counter rush billing.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-orange font-bold block mb-1">
                    Solution
                  </span>
                  <p className="text-gray-800 text-sm">
                    Fast counter billing system + customer digital khata + automated WhatsApp bills with embedded UPI payment QR.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-emerald-600 font-bold block mb-1">
                    Result
                  </span>
                  <p className="text-gray-800 text-sm font-medium">
                    Instant counter checkout, 100% accurate customer balance tracking, and faster credit recovery via automated WhatsApp notices.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 text-xs font-bold text-slate">
              Architecture: Counter Billing POS ↔ Digital Khata ↔ WhatsApp Payments
            </div>
          </div>

          {/* Case Study 3: Pune Bhim Shakti Sangathan */}
          <div 
            ref={card3Ref} 
            style={{ transitionDelay: '150ms' }}
            className={`bg-gray-50/70 rounded-3xl border border-gray-200 p-8 flex flex-col justify-between hover:bg-white hover:border-orange/60 hover:shadow-xl transition-all duration-500 ${
              card3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  Organizational App
                </span>
              </div>

              <h3 className="text-2xl font-black text-navy mb-4">
                Pune Bhim Shakti Sangathan
              </h3>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-sm font-bold flex items-center gap-2.5 mb-6">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Mobile Application Successfully Developed & Deployed</span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Engineered a custom, production-grade Android mobile application specifically built for organizational coordination, communication, and field activity tracking.
              </p>

              <div className="space-y-2 pt-2 border-t border-gray-200 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                  <span>Custom Android application architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                  <span>Fast, simple interface for diverse member demographics</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                  <span>Deployed directly to users with reliable performance</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 text-xs font-bold text-slate">
              Platform: Android Mobile Application
            </div>
          </div>

          {/* Case Study 4: LogicSync Rent */}
          <div 
            ref={card4Ref} 
            style={{ transitionDelay: '200ms' }}
            className={`bg-gray-50/70 rounded-3xl border border-gray-200 p-8 flex flex-col justify-between hover:bg-white hover:border-orange/60 hover:shadow-xl transition-all duration-500 ${
              card4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-navy/10 text-navy flex items-center justify-center">
                  <Home className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-navy bg-navy/5 px-3 py-1 rounded-full border border-navy/10">
                  Property Automation
                </span>
              </div>

              <h3 className="text-2xl font-black text-navy mb-3">
                LogicSync Rent
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Transformed manual rent calculation, electricity sub-meter math, and late payment chasing into a single automated digital pipeline.
              </p>

              {/* Step Flow */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs">
                  <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                  <span className="text-xs font-bold text-gray-800">Manual Rent Calculation</span>
                </div>
                <div className="flex justify-center text-orange -my-1">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs">
                  <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
                  <span className="text-xs font-bold text-gray-800">Meter Reading & Utility Computation</span>
                </div>
                <div className="flex justify-center text-orange -my-1">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs">
                  <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
                  <span className="text-xs font-bold text-gray-800">Automatic PDF Invoice Generation</span>
                </div>
                <div className="flex justify-center text-orange -my-1">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
                <div className="flex items-center gap-3 bg-orange/10 p-3 rounded-xl border border-orange/20 shadow-2xs">
                  <span className="w-6 h-6 rounded-full bg-orange text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
                  <span className="text-xs font-bold text-orange">Direct WhatsApp Dispatch & Payment Tracking</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 text-xs font-bold text-slate">
              Outcome: 100% Automated Utility & Rent Collections
            </div>
          </div>

        </div>

        {/* Bottom Action */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-orange-dark shadow-md transition-all"
          >
            <span>Discuss a Project for Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
