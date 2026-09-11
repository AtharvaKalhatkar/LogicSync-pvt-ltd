
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
  Bot 
} from 'lucide-react';

const AISection = () => {
  const [ref, visible] = useReveal();

  const capabilities = [
    { name: 'Smart Reports', icon: BarChart3 },
    { name: 'Business Insights', icon: TrendingUp },
    { name: 'Automated Summaries', icon: FileText },
    { name: 'Document Understanding', icon: ScanSearch },
    { name: 'Customer Support', icon: Headphones },
    { name: 'Predictive Analysis', icon: LineChart },
    { name: 'Workflow Automation', icon: Workflow },
    { name: 'Internal AI Assistants', icon: Bot },
  ];

  return (
    <section id="ai" className="py-20 bg-white">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              AI That Solves Real Business Problems
            </h2>
            <p className="text-lg text-slate mb-6">
              AI should solve a business problem — not just look impressive.
            </p>
            <p className="text-gray-800 mb-8">
              We integrate AI into business systems where it creates actual value — from automating reports to understanding documents to predicting patterns.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-light transition-colors"
            >
              Talk to us about an AI use case
            </Link>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 flex flex-col">
                    <Icon className="w-8 h-8 text-orange mb-2" />
                    <span className="text-sm font-semibold text-navy">
                      {cap.name}
                    </span>
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
