import React from 'react';
import { Cloud, Zap, Shield, BarChart3, Smartphone, Laptop } from 'lucide-react';

const services = [
  {
    icon: <Cloud size={24} />,
    title: 'Cloud-Sync Engine',
    description: 'Keep your business data in sync across all devices with our real-time cloud infrastructure.'
  },
  {
    icon: <Laptop size={24} />,
    title: 'Premium UI/UX',
    description: 'Modern, intuitive interfaces that wow your customers and simplify your operations.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Automated Billing',
    description: 'Save 10+ hours per week with automated invoice generation and payment tracking.'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile-First Solutions',
    description: 'Empower your field team with powerful mobile apps that work offline and sync later.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and automated backups ensure your business data is always safe.'
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your business performance with real-time reporting dashboards.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>The LogicSync Advantage</h2>
          <p>We provide the tools you need to scale your business in the digital age.</p>
        </div>
        
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card glass animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
