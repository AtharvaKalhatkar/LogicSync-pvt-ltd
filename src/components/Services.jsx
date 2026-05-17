import React from 'react';
import { Smartphone, Laptop, Eye, Users, Star, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile App Design',
    description: 'We specialize in creating bespoke applications that drive engagement and elevate user experiences. Our expertise spans across iOS and Android, delivering user-friendly, scalable apps.'
  },
  {
    icon: <Laptop size={24} />,
    title: 'Software Development',
    description: 'Our software development service crafts tailored solutions, leveraging modern technologies like Java, React, Android, PHP, and Dot Net to build robust, secure, and efficient systems.'
  },
  {
    icon: <Eye size={24} />,
    title: 'UI/UX Design',
    description: 'Transforming ideas into captivating and intuitive user experiences, our UI/UX service leverages cutting-edge methodologies to craft visually stunning interfaces that resonate with your audience.'
  },
  {
    icon: <Users size={24} />,
    title: 'Proficient Technological Team',
    description: 'Our group of highly proficient software engineers help you get reliable, fast, and robust business solutions designed specifically to streamline your operations and grow your business.'
  },
  {
    icon: <Star size={24} />,
    title: 'WOW Customers',
    description: 'When we build custom software solutions for your business, we assure you will be impressed and surprised by the premium quality, seamless animations, and the way we work together.'
  },
  {
    icon: <Wrench size={24} />,
    title: 'Support & Maintenance',
    description: 'Software solutions are a continuous process. We promise permanent support, regular version backups, and continuous optimizations on all business-related changes and enhancements.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Expert IT Services</h2>
          <p>We are a team of highly proficient software engineers in Pune delivering premium IT and software solutions.</p>
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
