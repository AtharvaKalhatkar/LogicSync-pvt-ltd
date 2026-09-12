import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, RefreshCw, Smartphone, Monitor, LayoutDashboard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden" id="hero">
      {/* Subtle background tech glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange font-bold text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-ping" />
              <span>LOGICSYNC DIGITAL</span>
            </div>

            <h1 className="text-navy text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight mb-4">
              Your Business Problems. <br />
              <span className="text-orange">Our Smart Digital Solutions.</span>
            </h1>

            <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate mb-6">
              <span className="text-navy">Software</span>
              <span className="text-orange font-black">•</span>
              <span className="text-navy">Automation</span>
              <span className="text-orange font-black">•</span>
              <span className="text-navy">AI Systems</span>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              From everyday business operations to complex workflows, we design and build digital systems that help businesses save time, reduce manual work and operate smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <Link
                to="/contact"
                className="bg-orange text-white px-8 py-4 rounded-xl font-bold text-base text-center hover:bg-orange-dark active:scale-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-navy text-navy px-8 py-4 rounded-xl font-bold text-base text-center hover:bg-navy hover:text-white active:scale-95 transition-all"
              >
                Explore Our Solutions
              </Link>
            </div>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-gray-200 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                <span>Custom Built for Your Exact Workflow</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                <span>Replace Excel, WhatsApp & Paper</span>
              </div>
            </div>

            {/* Government Verified Badge */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2 text-xs font-bold text-slate">
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Govt. of Maharashtra & MSME Verified</span>
              </span>
              <span className="font-mono text-slate text-[11px]">UDYAM-MH-26-1144939</span>
            </div>
          </div>

          {/* Right Side Visual: Connected Multi-System Architecture */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[420px] sm:min-h-[480px]">
            {/* Outer container card with subtle border */}
            <div className="relative w-full max-w-lg bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl overflow-hidden">
              
              <div className="flex items-center justify-between pb-5 border-b border-gray-200 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-navy">
                    Unified Business Architecture
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange bg-white px-3 py-1 rounded-full border border-orange/20 shadow-xs">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Real-Time Sync</span>
                </div>
              </div>

              {/* Stacked Device Representations */}
              <div className="space-y-4">
                
                {/* 1. Desktop ERP Box */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm hover:border-orange/40 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy leading-tight">Desktop Software / ERP</h4>
                        <p className="text-[11px] text-slate">Office & Admin Terminal</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full">
                      GST • Stock • Dues
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <span className="text-[10px] text-slate block uppercase">Today's Sales</span>
                      <strong className="text-navy font-bold">₹84,500</strong>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <span className="text-[10px] text-slate block uppercase">Invoices</span>
                      <strong className="text-navy font-bold">28 Paid</strong>
                    </div>
                    <div className="bg-orange/10 p-2 rounded-lg">
                      <span className="text-[10px] text-orange block uppercase font-bold">Udhari Due</span>
                      <strong className="text-orange font-bold">Auto-Notified</strong>
                    </div>
                  </div>
                </div>

                {/* Connecting Node */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-navy text-orange border-2 border-white shadow flex items-center justify-center">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 2. Mobile App Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm hover:border-orange/40 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange/10 text-orange flex items-center justify-center">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy leading-tight">Mobile Application</h4>
                        <p className="text-[11px] text-slate">Field Staff, Delivery & Customers</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full border border-green-200">
                      Live Delivery GPS
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs bg-gray-50 p-2.5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-gray-700 font-medium">Auto-generated WhatsApp Bill</span>
                    </div>
                    <span className="font-bold text-navy">Sent instantly</span>
                  </div>
                </div>

                {/* Connecting Node */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-navy text-orange border-2 border-white shadow flex items-center justify-center">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 3. Web Dashboard Box */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm hover:border-orange/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy leading-tight">Cloud Web Dashboard</h4>
                        <p className="text-[11px] text-slate">Owner's 24/7 Live Analytics</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-orange">
                      Zero Manual Entry
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom tag */}
              <div className="mt-5 text-center text-xs font-semibold text-slate">
                One Business • Multiple Digital Systems • Seamless Operations
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
