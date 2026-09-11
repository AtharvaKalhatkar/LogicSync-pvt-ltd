import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What types of businesses and industries do you build software for?',
    answer: 'We design custom software, ERPs, and mobile applications for manufacturing units, retail distributors, wholesale traders, logistics providers, and professional service companies across Pune and India.'
  },
  {
    question: 'How does your Offline-First architecture work for field teams?',
    answer: 'Our mobile and desktop apps are architected with local SQLite/IndexedDB caches. When internet connectivity drops, your team can continue recording invoices, deliveries, or attendance without interruption. As soon as a connection is detected, changes automatically sync with your cloud database.'
  },
  {
    question: 'What is the typical timeline for developing a custom software solution?',
    answer: 'A standard custom system (such as an automated billing portal or driver tracking suite) is typically designed, developed, and deployed within 3 to 5 weeks. Larger enterprise ERP platforms with complex multi-branch logic usually take 6 to 10 weeks.'
  },
  {
    question: 'Who owns the code and intellectual property once the project is finished?',
    answer: 'You do. You retain 100% full intellectual property, source code ownership, and exclusive rights to all custom business logic, databases, and assets we build for your enterprise.'
  },
  {
    question: 'Can you migrate our existing Excel sheets and paper records to the new system?',
    answer: 'Yes! Data migration is part of our onboarding. Our team handles data sanitation, schema mapping, and importing your client directories, historical accounts, and inventory lists directly into your new cloud database.'
  },
  {
    question: 'What ongoing maintenance and SLA support do you offer after launch?',
    answer: 'Every deployment includes a 30-day dedicated warranty and training period. Afterwards, we provide ongoing maintenance packages that cover version updates, cloud backup monitoring, security patches, and 24/7 emergency response.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section bg-darker">
      <div className="container">
        <div className="section-title">
          <span className="badge-pill">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Got Questions? <span className="sync-text">We Have Answers</span></h2>
          <p>Everything you need to know about working with LogicSync Digital on your next software initiative.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item glass ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <div className="faq-question-text">
                    <HelpCircle size={20} className="faq-icon-help" />
                    <h4>{faq.question}</h4>
                  </div>
                  <div className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
