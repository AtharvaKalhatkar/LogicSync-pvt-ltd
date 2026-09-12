import { Link } from 'react-router-dom';
import { useReveal } from '../lib/hooks';
import { 
  BarChart3, 
  TrendingUp, 
  FileText, 
  ScanSearch, 
  Headphones, 
  LineChart, 
  Workflow, 
  Bot,
  ArrowRight,
  BrainCircuit
} from 'lucide-react';

const AISection = () => {
  const [ref, visible] = useReveal();

  const capabilities = [
    {
      name: 'Smart Reports',
      desc: 'Instant financial & sales breakdowns delivered automatically.',
      icon: BarChart3
    },
    {
      name: 'Business Insights',
      desc: 'Detect margin leaks, dead stock, and top-performing products.',
      icon: TrendingUp
    },
    {
      name: 'Automated Summaries',
      desc: 'Daily 8 PM executive briefing sent straight to the owner’s WhatsApp.',
      icon: FileText
    },
    {
      name: 'Document Understanding',
      desc: 'Scan paper invoices and supplier PDFs directly into your ERP ledger.',
      icon: ScanSearch
    },
    {
      name: 'Customer Support',
      desc: '24/7 automated order status and invoice delivery on WhatsApp.',
      icon: Headphones
    },
    {
      name: 'Predictive Analysis',
      desc: 'Forecast seasonal demand spikes and stock re-order levels accurately.',
      icon: LineChart
    },
    {
      name: 'Workflow Automation',
      desc: 'Trigger automatic payment follow-ups when invoices become overdue.',
      icon: Workflow
    },
    {
      name: 'Internal AI Assistants',
      desc: 'Ask questions about your business inventory and dues in plain English.',
      icon: Bot
    },
  ];

  return (
    <section id="ai" className="py-24 bg-gray-50/50">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-4 border border-orange/20">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Pragmatic Technology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
              AI That Solves Real Business Problems
            </h2>

            <p className="text-lg sm:text-xl font-bold text-orange mb-6">
              AI should solve a business problem — not just look impressive.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              We don't build generic chatbots or gimmicks. We integrate artificial intelligence into your existing daily business systems where it creates measurable ROI — reducing clerical data entry, catching invoice discrepancies, and surfacing actionable insights.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate block mb-1">
                Our Guarantee
              </span>
              <p className="text-navy font-semibold text-sm">
                Every AI feature we implement must save your staff tangible hours or directly prevent financial leakages.
              </p>
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-orange-dark shadow-md hover:shadow-lg active:scale-95 transition-all"
            >
              <span>Talk to Us About an AI Use Case</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Side 8 Capabilities Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-orange hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center mb-3 group-hover:bg-orange group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-navy mb-1 group-hover:text-orange transition-colors">
                        {cap.name}
                      </h3>
                      <p className="text-slate text-xs leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AISection;
