import { Laptop, Smartphone, Database, MessageSquare, Cloud, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Laptop size={28} />,
    title: 'Custom ERP & Enterprise Software',
    desc: 'Bespoke business platforms tailored to your operational workflows. Eliminate repetitive manual paperwork, centralize data, and scale your organization.',
    deliverables: ['Custom Ledger & Inventory Engines', 'Role-Based Team Dashboards', 'Multi-Branch Synchronization']
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile Apps & Offline-First PWAs',
    desc: 'High-performance mobile applications engineered for field operators and drivers with 100% offline resilience that auto-syncs when online.',
    deliverables: ['Android & iOS Apps', 'Offline-First Local Storage', 'Instant Dial & Route Filtering']
  },
  {
    icon: <Cloud size={28} />,
    title: 'Full-Stack Web & Cloud Platforms',
    desc: 'Fast, secure, and modern web applications built using cutting-edge stacks like React, Next.js, Node.js, and scalable cloud microservices.',
    deliverables: ['High-Performance Web Portals', 'Scalable RESTful & GraphQL APIs', 'Cloud Server Architecture']
  },
  {
    icon: <MessageSquare size={28} />,
    title: 'WhatsApp Automation & Billing POS',
    desc: 'Automate your customer communication, invoice generation, payment receipts, and collection reminders straight via WhatsApp.',
    deliverables: ['1-Click WhatsApp Invoicing', 'Automated Overdue Reminders', 'GST-Ready Invoices & PDF Reports']
  },
  {
    icon: <Database size={28} />,
    title: 'Database Architecture & Cloud Migration',
    desc: 'Robust database modeling with PostgreSQL, MySQL, and Supabase. Secure migration of legacy registers and spreadsheets to the cloud.',
    deliverables: ['Zero-Loss Data Migration', 'Automated Cloud Snapshots', 'Encrypted Real-Time Sync']
  },
  {
    icon: <Wrench size={28} />,
    title: 'Maintenance & Dedicated 24/7 Support',
    desc: 'Software is a continuous investment. We provide round-the-clock monitoring, feature expansions, and guaranteed SLA uptime.',
    deliverables: ['24/7 Technical Assistance', 'Continuous Security Patches', 'Dedicated On-Call Engineers']
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-title">
          <span className="badge-pill">OUR SERVICES</span>
          <h2>Comprehensive <span className="sync-text">Engineering Services</span></h2>
          <p>
            From conceptual architecture to full-scale deployment and 24/7 maintenance, 
            we deliver enterprise-grade software that accelerates your business.
          </p>
        </div>

        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              
              <div className="service-deliverables">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="deliv-item">
                    <span className="deliv-bullet">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="service-card-action">
                <a href="#contact" className="service-link">
                  Consult With Us <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
