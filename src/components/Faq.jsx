import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Our drivers deliver in areas with poor network. Will the mobile app work?',
    answer: 'Yes, absolutely! We specialize in Offline-First architectures. The driver PWA app runs fully offline, stores records locally on the driver\'s device, and automatically synchronizes with your cloud database (Supabase/MySQL) the moment internet connectivity is restored.'
  },
  {
    question: 'How long does it take to fully digitize our operations?',
    answer: 'A standard deployment (like an automated ledger, basic analytics dashboard, and driver companion apps) takes about 2 to 3 weeks. High-end enterprise setups with multi-device configurations, custom billing engines, and manual bookkeeping exports typically take 4 to 6 weeks.'
  },
  {
    question: 'Will our non-technical staff and drivers be able to operate the apps?',
    answer: 'Yes! We design incredibly simple, intuitive mobile layouts. Our UIs are customized with bold labels, big buttons, clean search boxes, and minimal steps. If your drivers or helpers can operate WhatsApp, they can easily navigate our synchronized systems.'
  },
  {
    question: 'Where is our business data stored and is it safe from crashes?',
    answer: 'Your data safety is our highest priority. We implement two-layer resilience: your local systems hold secure offline caches, and our cloud databases execute automated snapshots every 2 hours (e.g., to Google Drive or AWS). Even if a computer breaks, your complete records are recoverable in one click.'
  },
  {
    question: 'Can you export all our data into Microsoft Excel or PDF?',
    answer: 'Yes! All our custom desktop systems come equipped with a green "Download Excel" engine. It generates perfectly formatted, calculation-ready spreadsheets containing exact daily records, client routes, and automated financial tallies, ready for audit and taxation.'
  },
  {
    question: 'What kind of training and maintenance support do you provide?',
    answer: 'We provide full hands-on training for your warehouse operators, administrative managers, and drivers. Additionally, we provide a 30-day dedicated post-launch support period to monitor stability and implement updates as your business scales.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-title">
          <h2>Got Questions? We Have Answers.</h2>
          <p>Common concerns and questions small business owners ask when digitizing their operations with LogicSync.</p>
        </div>

        <div className="faq-list animate-fade-in">
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
                  <div className="faq-answer animate-fade-in">
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
