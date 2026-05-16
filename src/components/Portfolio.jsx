import React, { useState } from 'react';
import desktopDashboard from '../assets/aqua-desktop-dashboard.png';
import mobileCustomers from '../assets/aqua-mobile-customers.png';
import mobileVault from '../assets/aqua-mobile-vault.png';
import desktopRegister from '../assets/aqua-desktop-register.png';
import excelExport from '../assets/aqua-excel-export.png';

const tabs = [
  {
    id: 'dashboard',
    label: 'Admin Dashboard',
    title: 'High-Performance Management Hub',
    description: 'A completely customized desktop system giving real-time control over total customers, daily operations, monthly income, and route-wise business mapping.',
    image: desktopDashboard,
    tags: ['Desktop App', 'Java & React', 'Analytics'],
    features: ['Total active client counter & live indicators', 'Today\'s delivery checklist for warehouse operators', 'One-click "Force Sync" with cloud database']
  },
  {
    id: 'mobile',
    label: 'Driver App Companion',
    title: 'Mobile-First Offline Companion',
    description: 'Optimized for drivers on the go. Fully searchable route maps and directories with offline resilience to sync operations later.',
    image: mobileCustomers,
    tags: ['PWA Mobile', 'Real-Time Sync', 'Offline First'],
    features: ['Instant route filtering (Chakan, Pune, Talegaon)', 'One-click dial action buttons for instant driver contact', 'Connected indicators showing real-time database state']
  },
  {
    id: 'vault',
    label: 'Mobile Ledger & Vault',
    title: 'Secure Ledger & Metric Tallies',
    description: 'Keep accounts pristine without physical diary books. Auto-calculates monthly consumption tallies and pending bills directly in drivers\' hands.',
    image: mobileVault,
    tags: ['Billing Ledger', 'Data Safety', 'Premium UX'],
    features: ['Auto-computed grand total metrics', 'Visual payment and pending bill tracking', 'Secure database architecture for robust ledger logs']
  },
  {
    id: 'register',
    label: 'Digital Delivery Register',
    title: 'Date-wise Digital Delivery Register',
    description: 'Clean grid-style digital register replaces large physical ledger books. Load dates, routes, and update jar/bottle counts in seconds.',
    image: desktopRegister,
    tags: ['Data Grid', 'Cloud Synced', 'Enterprise UI'],
    features: ['Clean spreadsheet-style daily count entry', 'Automatic bottom counters for Jars, Bottles, Revenue', 'Visual route segregation for clean navigation']
  },
  {
    id: 'excel',
    label: 'Excel Auto-Exporter',
    title: 'Automated Reports & Exports',
    description: 'Keep your bookkeeper and accountant happy. Generate perfectly formatted, calculations-ready Excel sheets at the click of a button.',
    image: excelExport,
    tags: ['Automated Reporting', 'Data Export', 'Accuracy'],
    features: ['Automatic grand total summaries and formulas', 'Beautiful custom header layouts with customer routes', 'Ready for accounting audits instantly']
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Bhairavnath Cool Aqua Case Study</h2>
          <p>A full-stack, cloud-synchronized suite built to completely modernize a massive water distribution business.</p>
        </div>

        <div className="portfolio-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`portfolio-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="portfolio-card glass animate-fade-in" style={{ key: activeTab }}>
          <div className="portfolio-img-wrapper">
            <img src={currentTab.image} alt={currentTab.title} className="portfolio-showcase-img" />
          </div>
          <div className="portfolio-content">
            <div className="portfolio-tags">
              {currentTab.tags.map((tag, i) => (
                <span key={i} className="portfolio-tag-badge">{tag}</span>
              ))}
            </div>
            <h3>{currentTab.title}</h3>
            <p>{currentTab.description}</p>
            <ul className="portfolio-features">
              {currentTab.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Build My Custom System
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
