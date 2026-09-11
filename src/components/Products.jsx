import { Database, Smartphone, FileText, Truck, ArrowRight, Check } from 'lucide-react';

const products = [
  {
    id: 'syncerp',
    badge: 'Enterprise Platform',
    title: 'SyncERP',
    subtitle: 'Comprehensive Enterprise Resource Planning',
    description: 'A modular, high-scale ERP tailored for manufacturers, distributors, and growing enterprises to centralize inventory, accounts, and departmental workflows.',
    icon: <Database size={26} />,
    features: [
      'Multi-branch inventory & warehouse tracking',
      'Real-time financial ledgers and GST compliance',
      'Granular role-based access & audit logs',
      'Automated daily backup & multi-device sync'
    ],
    tags: ['Desktop & Web', 'PostgreSQL', 'Real-Time Sync']
  },
  {
    id: 'vyaparsync',
    badge: 'Mobile & Desktop PWA',
    title: 'VyaparSync',
    subtitle: 'Offline-First Business Management Suite',
    description: 'Designed specifically for field operators, delivery drivers, and retail hubs where internet connectivity is intermittent. Records transactions offline and syncs automatically.',
    icon: <Smartphone size={26} />,
    features: [
      '100% offline operational resilience',
      'One-click cloud synchronization',
      'Instant search and customer phone dialer',
      'Cross-platform support (Android, iOS, Windows)'
    ],
    tags: ['Offline First', 'React PWA', 'Cloud Synced']
  },
  {
    id: 'billsync',
    badge: 'Billing & Automation',
    title: 'BillSync & WhatsApp POS',
    subtitle: 'Smart Invoicing & Automated Dispatch',
    description: 'Eliminates loose paperwork and manual calculation errors with automated digital billing, instant WhatsApp invoice delivery, and customer debt tracking.',
    icon: <FileText size={26} />,
    features: [
      '1-click instant WhatsApp invoice delivery',
      'Automated overdue payment reminders',
      'Print-ready Excel & PDF summaries',
      'Integrated QR code and UPI payments'
    ],
    tags: ['WhatsApp API', 'GST Invoicing', 'Excel Export']
  },
  {
    id: 'fleetsync',
    badge: 'Operations & Logistics',
    title: 'FleetSync & Route Manager',
    subtitle: 'Smart Dispatch & Delivery Coordination',
    description: 'Streamline client delivery routes, manage vehicle dispatches, and track operational metrics with an intuitive map and checklist system.',
    icon: <Truck size={26} />,
    features: [
      'Visual route mapping and client segregation',
      'Daily driver delivery checklists',
      'Live trip progress and completion metrics',
      'Driver companion mobile app integration'
    ],
    tags: ['Logistics', 'Route Mapping', 'Mobile First']
  }
];

const Products = () => {
  return (
    <section id="products" className="products-section section bg-darker">
      <div className="container">
        <div className="section-title">
          <span className="badge-pill">OUR PRODUCTS</span>
          <h2>Flagship <span className="sync-text">Software Platforms</span></h2>
          <p>
            Battle-tested, ready-to-deploy platforms engineered to solve operational bottlenecks 
            and modernize your day-to-day business management.
          </p>
        </div>

        <div className="products-grid grid grid-2">
          {products.map((product) => (
            <div key={product.id} className="product-card glass">
              <div className="product-card-top">
                <div className="product-icon-box">
                  {product.icon}
                </div>
                <span className="product-badge">{product.badge}</span>
              </div>

              <h3 className="product-title">{product.title}</h3>
              <div className="product-subtitle">{product.subtitle}</div>
              <p className="product-desc">{product.description}</p>

              <div className="product-features">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="feat-item">
                    <Check size={16} className="feat-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="product-footer">
                <div className="product-tags">
                  {product.tags.map((tag, idx) => (
                    <span key={idx} className="product-tag">{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="btn btn-primary product-cta">
                  Request Demo <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
