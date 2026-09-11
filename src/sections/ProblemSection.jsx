
import { 
  Keyboard, 
  Calculator, 
  FileX, 
  Clock, 
  CreditCard, 
  BarChart3, 
  MessageCircle, 
  Database,
  ArrowDown
} from 'lucide-react';
import { useReveal } from '../lib/hooks';

const ProblemSection = () => {
  const [ref, visible] = useReveal();

  const problems = [
    { id: 1, title: 'Manual Data Entry', icon: <Keyboard className="text-red-500 w-6 h-6" /> },
    { id: 2, title: 'Repeated Calculations', icon: <Calculator className="text-red-500 w-6 h-6" /> },
    { id: 3, title: 'Lost Information', icon: <FileX className="text-red-500 w-6 h-6" /> },
    { id: 4, title: 'Delayed Billing', icon: <Clock className="text-red-500 w-6 h-6" /> },
    { id: 5, title: 'Difficult Payment Tracking', icon: <CreditCard className="text-red-500 w-6 h-6" /> },
    { id: 6, title: 'No Clear Reports', icon: <BarChart3 className="text-red-500 w-6 h-6" /> },
    { id: 7, title: 'Too Much WhatsApp Coordination', icon: <MessageCircle className="text-red-500 w-6 h-6" /> },
    { id: 8, title: 'No Centralized System', icon: <Database className="text-red-500 w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-gray-50" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-navy text-3xl md:text-4xl font-bold">
            Still Running Your Business on WhatsApp, Excel & Paper?
          </h2>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {problems.map((problem) => (
            <div 
              key={problem.id} 
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg">
                {problem.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-12 text-center">
          <p className="text-xl text-navy font-semibold mb-6">
            We turn these problems into simple digital systems.
          </p>
          <div className="animate-bounce">
            <ArrowDown className="text-orange w-8 h-8" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
