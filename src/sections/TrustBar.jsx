import { useCountUp } from '../lib/hooks';
import { CheckCircle, Clock, Users, CreditCard } from 'lucide-react';

const TrustBar = () => {
  const [ref1, count1] = useCountUp(20, 1800);
  const [ref2, count2] = useCountUp(7, 1800);
  const [ref3, count3] = useCountUp(15, 1800);
  const [ref4, count4] = useCountUp(250, 1800);

  return (
    <section className="bg-gray-50/90 border-y border-gray-200 py-10" id="milestones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-slate">
            Proven Delivery • Real Business Impact
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          
          {/* Milestone 1: Projects Delivered */}
          <div className="flex flex-col items-center text-center p-4 bg-white/70 rounded-2xl border border-gray-200/80 shadow-2xs" ref={ref1}>
            <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center mb-3">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-1">
              <span className="text-orange">{count1}</span>+
            </div>
            <span className="text-slate text-xs sm:text-sm uppercase tracking-wider font-bold">
              Projects Delivered
            </span>
          </div>

          {/* Milestone 2: Projects Ongoing */}
          <div className="flex flex-col items-center text-center p-4 bg-white/70 rounded-2xl border border-gray-200/80 shadow-2xs" ref={ref2}>
            <div className="w-12 h-12 rounded-2xl bg-navy/10 text-navy flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-1">
              <span className="text-orange">{count2}</span>
            </div>
            <span className="text-slate text-xs sm:text-sm uppercase tracking-wider font-bold">
              Projects Ongoing
            </span>
          </div>

          {/* Milestone 3: Clients Served */}
          <div className="flex flex-col items-center text-center p-4 bg-white/70 rounded-2xl border border-gray-200/80 shadow-2xs" ref={ref3}>
            <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-1">
              <span className="text-orange">{count3}</span>
            </div>
            <span className="text-slate text-xs sm:text-sm uppercase tracking-wider font-bold">
              Clients Served
            </span>
          </div>

          {/* Milestone 4: Live Paid Users */}
          <div className="flex flex-col items-center text-center p-4 bg-white/70 rounded-2xl border border-gray-200/80 shadow-2xs" ref={ref4}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
              <CreditCard className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-1">
              <span className="text-emerald-600">{count4}</span>+
            </div>
            <span className="text-slate text-xs sm:text-sm uppercase tracking-wider font-bold">
              Live Paid Users / Month
            </span>
          </div>

        </div>

        <div className="text-center mt-8">
          <p className="text-sm font-medium text-slate italic">
            “A small milestone. A strong foundation.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
