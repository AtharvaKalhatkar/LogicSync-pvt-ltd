
import { ArrowRight, RefreshCw } from 'lucide-react';
import { useReveal } from '../lib/hooks';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'AgriSync',
    audience: 'Krushi Seva Kendra / Agricultural Input Shops',
    description: 'Digital software for managing billing, stock, customers, suppliers and daily operations.',
    features: ['Billing', 'Stock Management', 'Customer Management', 'Supplier Management', 'Udhari / Due Tracking', 'Reports'],
    accent: '#16a34a', // green-600
  },
  {
    name: 'AquaSync',
    audience: 'Water Jar & 20L Bottle Businesses',
    description: 'Manage daily jar deliveries, customer records and monthly billing from one simple system.',
    features: ['Daily Delivery Entry', 'Customer Tracking', 'Automatic Monthly Billing', 'WhatsApp Invoice', 'Payment Tracking'],
    accent: '#3b82f6', // blue-500
  },
  {
    name: 'LogicSync Rent',
    audience: 'Property Owners, Hostel & PG Owners',
    description: 'Make monthly rent and utility billing simple.',
    features: ['Tenant Management', 'Meter Reading', 'Automatic Billing', 'PDF Invoice', 'WhatsApp Sharing'],
    accent: '#9333ea', // purple-600
  },
  {
    name: 'PropertySync',
    audience: 'Real Estate Agents & Property Brokers',
    description: 'Manage visitors, clients, properties, deals, follow-ups and billing in one place.',
    features: ['Visitor Entry', 'Client Management', 'Property Management', 'Deal Management', 'Invoice Generation'],
    accent: '#4f46e5', // indigo-600
  },
  {
    name: 'VEGA ERP',
    audience: 'Distributors & Agency Owners',
    description: 'Complete ERP with Desktop Software + Salesman App.',
    features: ['Salesman Order App', 'Billing & GST', 'Inventory', 'Payment Collection', 'Reports', 'Profit & Loss'],
    accent: '#FF6B00', // orange brand color
    isVega: true,
  },
  {
    name: 'CrusherSync',
    audience: 'Stone Crusher Businesses',
    description: 'Digital management for vehicles, weighing, production, stock and billing.',
    features: ['Vehicle Entry', 'Weighment', 'Production', 'Stock', 'Billing', 'Reports'],
    accent: '#d97706', // amber-600
  },
  {
    name: 'PackSync',
    audience: 'Packaging Businesses',
    description: 'Desktop and mobile software for managing packaging operations.',
    features: ['Orders', 'Production', 'Stock', 'Customers', 'Billing', 'Reports'],
    accent: '#0d9488', // teal-600
  },
  {
    name: 'BuildSync',
    audience: 'Construction & Equipment Businesses',
    description: 'Track machine working hours and automatically generate customer invoices.',
    features: ['Machine Entry', 'Start/End Time', 'Hourly Rate', 'Automatic Invoice', 'WhatsApp Sharing'],
    applicable: 'Applicable to: JCB, Crane, Tipper, Tractor, Mixer',
    accent: '#e11d48', // rose-600
  },
];

const ProductCard = ({ product, index }) => {
  const [ref, visible] = useReveal();
  const delay = index * 100;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } flex flex-col h-full`}
    >
      <div style={{ backgroundColor: product.accent, height: '4px', width: '100%' }}></div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-navy">{product.name}</h3>
        <p className="text-sm text-slate mt-1 italic">For: {product.audience}</p>
        <p className="text-gray-800 mt-3">{product.description}</p>
        
        {product.isVega && (
          <div className="inline-flex items-center gap-2 bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full mt-3 self-start">
            <RefreshCw className="w-3 h-3" />
            <span>Salesman App ↔ Desktop ERP</span>
          </div>
        )}
        
        {product.applicable && (
          <p className="text-sm text-gray-700 mt-2">{product.applicable}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-4 flex-grow">
          {product.features.map((feature, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>

        <Link
          to={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-orange font-semibold text-sm hover:underline flex items-center gap-1 mt-5 w-max"
        >
          View Solution <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default function Products() {
  const [ref, visible] = useReveal();

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center">Solutions We've Built</h2>
          <p className="text-slate text-center mt-4 max-w-2xl mx-auto">
            Real products solving real business problems — built by LogicSync Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
