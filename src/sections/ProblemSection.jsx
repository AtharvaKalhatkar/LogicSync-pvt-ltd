import { 
  Keyboard, 
  Calculator, 
  FileX, 
  Clock, 
  CreditCard, 
  BarChart3, 
  MessageCircle, 
  Database,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useReveal } from '../lib/hooks';

const ProblemSection = () => {
  const [ref, visible] = useReveal();

  const problems = [
    {
      id: 1,
      title: 'Manual Data Entry',
      desc: 'Typing the same customer and bill details into registers, books, and spreadsheets daily.',
      icon: Keyboard,
    },
    {
      id: 2,
      title: 'Repeated Calculations',
      desc: 'Doing totals, GST, and discounts on a pocket calculator again and again with room for errors.',
      icon: Calculator,
    },
    {
      id: 3,
      title: 'Lost Information',
      desc: 'Missing bills, forgotten customer orders, and misplaced loose paper receipts.',
      icon: FileX,
    },
    {
      id: 4,
      title: 'Delayed Billing',
      desc: 'Invoices sent days or weeks after delivery, directly choking your cash flow and collections.',
      icon: Clock,
    },
    {
      id: 5,
      title: 'Difficult Payment Tracking',
      desc: 'Unclear udhari balances and chasing clients without clear, itemized payment proof.',
      icon: CreditCard,
    },
    {
      id: 6,
      title: 'No Clear Reports',
      desc: 'Never knowing accurate monthly profit, dead inventory, or true customer outstanding.',
      icon: BarChart3,
    },
    {
      id: 7,
      title: 'WhatsApp Overload',
      desc: 'Orders, delivery slips, and driver updates scattered across hundreds of chaotic WhatsApp chats.',
      icon: MessageCircle,
    },
    {
      id: 8,
      title: 'No Centralized System',
      desc: 'Business operations halt if the owner is not physically present at the shop or site.',
      icon: Database,
    },
  ];

  return (
    <section className="py-24 bg-white" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-wider mb-4 border border-red-200">
            <span>The Daily Reality</span>
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Still Running Your Business on <br />
            <span className="text-orange">WhatsApp, Excel & Paper?</span>
          </h2>
          <p className="text-slate text-base sm:text-lg">
            Traditional tools were fine when you started. But as operations grow, manual methods create bottlenecks, revenue leakage, and mental stress.
          </p>
        </div>

        {/* 8 Problem Cards Grid */}
        <div 
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div 
                key={problem.id} 
                className="bg-gray-50/70 border border-gray-200 rounded-2xl p-6 flex flex-col items-start hover:bg-white hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100/60 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Transition Highlight Banner */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-navy text-white p-8 sm:p-10 shadow-2xl overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange bg-white/10 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span>The Transformation</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              We turn these problems into simple digital systems.
            </h3>
            
            <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              No complicated corporate buzzwords. We digitize your actual everyday process so your team saves hours every single day.
            </p>

            <a
              href="#process"
              className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-light transition-all shadow-md"
            >
              <span>See How We Solve It</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
