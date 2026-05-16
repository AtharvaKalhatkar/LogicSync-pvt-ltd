import React from 'react';
import { Search, Code2, RefreshCcw, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search size={28} />,
    title: 'Consultation',
    description: 'We analyze your current manual workflows and identify bottlenecks where technology can save time.'
  },
  {
    icon: <Code2 size={28} />,
    title: 'Custom Build',
    description: 'Our team develops a tailor-made software solution designed specifically for your business needs.'
  },
  {
    icon: <RefreshCcw size={28} />,
    title: 'Cloud Sync',
    description: 'We integrate real-time synchronization, allowing your team to work offline and sync data seamlessly.'
  },
  {
    icon: <Rocket size={28} />,
    title: 'Scale Up',
    description: 'Launch your digital system and watch your operational efficiency grow as we support your expansion.'
  }
];

const Process = () => {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-title">
          <h2>How We Transform Your Business</h2>
          <p>Our four-step process to take your operations from manual to high-tech.</p>
        </div>
        
        <div className="process-grid grid grid-4">
          {steps.map((step, index) => (
            <div key={index} className="process-item animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="process-icon-wrapper">
                <div className="process-icon glass">
                  {step.icon}
                </div>
                {index < steps.length - 1 && <div className="process-connector"></div>}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
