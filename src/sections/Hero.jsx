import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { useCountUp } from '../lib/hooks';

const Hero = () => {
  const [ref1, count1] = useCountUp(20, 2000);
  const [ref2, count2] = useCountUp(250, 2000);
  const [ref3, count3] = useCountUp(15, 2000);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white" id="hero">
      {/* Background: Animated gradient mesh */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-orange/8 blur-3xl animate-float" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-navy/5 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-orange/5 blur-2xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(7,26,51,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(7,26,51,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Announcement badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 mb-8 animate-fade-in-up">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-navy uppercase tracking-wider">Govt. of Maharashtra Verified</span>
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-xs font-medium text-slate">UDYAM-MH-26-1144939</span>
          </div>

          {/* Main headline */}
          <h1 className="text-navy text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We Build the Systems
            <br />
            <span className="relative">
              <span className="text-orange">That Run Your Business</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none">
                <path d="M2 10C60 3 150 2 200 5C250 8 340 3 398 7" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
              </svg>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
            Custom software, mobile apps & automation — designed around
            <span className="text-navy font-bold"> your exact workflow</span>. No templates. No compromises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="group bg-navy text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-navy-light active:scale-[0.98] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="group border-2 border-gray-200 text-navy px-8 py-4 rounded-2xl font-bold text-base sm:text-lg hover:border-navy hover:bg-navy/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>View Our Products</span>
            </Link>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Zap, text: 'Replace Excel & WhatsApp' },
              { icon: Shield, text: 'Custom Built for You' },
              { icon: Sparkles, text: 'AI-Powered Automation' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-700 hover:border-orange/40 hover:shadow-md transition-all"
              >
                <item.icon className="w-4 h-4 text-orange" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg px-8 sm:px-12 py-6">
              <div className="text-center" ref={ref1}>
                <div className="text-3xl sm:text-4xl font-black text-navy">
                  {count1}<span className="text-orange">+</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate mt-1 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="text-center" ref={ref3}>
                <div className="text-3xl sm:text-4xl font-black text-navy">
                  {count3}<span className="text-orange">+</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate mt-1 uppercase tracking-wider">Clients Served</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="text-center" ref={ref2}>
                <div className="text-3xl sm:text-4xl font-black text-navy">
                  {count2}<span className="text-orange">+</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate mt-1 uppercase tracking-wider">Paid Users / Month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
