import { ArrowRight, RefreshCw, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useReveal } from '../lib/hooks';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'AgriSync',
    tagline: 'Krushi Seva Kendra / Agro Input Retail',
    description: 'Digital software for managing billing, seed & fertilizer stock, customer credit ledger, and supplier payments.',
    features: ['Instant Billing & GST', 'Batch & Expiry Stock', 'Customer Udhari Ledger', 'Supplier Due Tracking', 'Daily Cash & Sales Report'],
    accent: '#16a34a',
    badge: 'Agro Retail'
  },
  {
    name: 'Aqua Sync',
    tagline: 'Water Jar & 20L Bottle Distribution',
    description: 'Manage daily jar deliveries, driver bottle registers, empty bottle returns, and automatic WhatsApp monthly billing.',
    features: ['Daily Delivery Entry', 'Bottle / Jar Deposit Ledger', 'Auto Monthly Invoicing', 'Instant WhatsApp Bill PDF', 'Payment & Balance Tracking'],
    accent: '#0284c7',
    badge: 'Distribution'
  },
  {
    name: 'LogicSync Rent',
    tagline: 'Hostels, PGs & Commercial Properties',
    description: 'Eliminate manual rent notebooks. Track room allotment, electricity meter readings, and auto-generate monthly rent invoices.',
    features: ['Tenant KYC & Room Allocation', 'Electricity Meter Reading Calc', 'Auto Rent Invoice Generation', 'WhatsApp Invoice Dispatch', 'Payment Collection Receipts'],
    accent: '#7c3aed',
    badge: 'Real Estate'
  },
  {
    name: 'Property Sync',
    tagline: 'Real Estate Brokers & Property Consultancies',
    description: 'Manage client inquiries, site visit logs, property listings, brokerage deals, and follow-up reminders in one central place.',
    features: ['Lead & Visitor Tracking', 'Property Inventory Directory', 'Site Visit Scheduling', 'Deal Closing & Commission', 'WhatsApp Client Updates'],
    accent: '#4f46e5',
    badge: 'Real Estate'
  },
  {
    name: 'VEGA ERP',
    tagline: 'Distributors, FMCG & Agency Owners',
    description: 'End-to-end enterprise distribution system uniting mobile salesman order booking with a desktop billing & warehouse ERP.',
    features: ['Salesman Android App', 'Desktop Warehouse ERP', 'Live Order & Stock Sync', 'GST E-Way Bill Ready', 'Outstanding Due Collection', 'Live Profit & Loss Engine'],
    accent: '#FF6B00',
    badge: 'Flagship ERP',
    isVega: true,
  },
  {
    name: 'Crusher Sync',
    tagline: 'Stone Crusher & Quarry Operations',
    description: 'Complete digital management for vehicle weighbridge entry, material production, stock piles, royalty, and transport billing.',
    features: ['Weighbridge Vehicle Entry', 'Gross / Tare Weight Log', 'Material Stock by Fraction', 'Automatic Trip Invoicing', 'Royalty & Transport Reports'],
    accent: '#d97706',
    badge: 'Mining & Infra'
  },
  {
    name: 'PackSync',
    tagline: 'Corrugated Box & Packaging Units',
    description: 'Streamline box dimensions, flute specifications, paper roll inventory, job card tracking, and dispatch invoicing.',
    features: ['Job Card & Order Production', 'Paper Roll Stock Tracker', 'Customer Spec Library', 'Batch Dispatch Invoicing', 'Wastage & Cost Analysis'],
    accent: '#0d9488',
    badge: 'Manufacturing'
  },
  {
    name: 'Build Sync',
    tagline: 'Heavy Machinery & Earthmovers',
    description: 'Track operating hours, diesel consumption, and machine meter logs to automatically bill contractors without disputes.',
    features: ['Machine Hour Meter Log', 'Start / Stop Time Tracking', 'Contractor Hourly Rates', 'Auto Timesheet Invoices', 'WhatsApp Invoice Dispatch'],
    applicable: 'JCB • Crane • Halwa Truck • Tipper • Tractor • Concrete Mixer',
    accent: '#e11d48',
    badge: 'Construction'
  },
];

const ProductCard = ({ product, index }) => {
  const [ref, visible] = useReveal();
  const delay = (index % 4) * 80;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-white rounded-3xl border border-gray-200 hover:border-navy hover:shadow-2xl transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } flex flex-col justify-between overflow-hidden group`}
    >
      <div>
        {/* Top Accent Color Strip */}
        <div style={{ backgroundColor: product.accent, height: '5px', width: '100%' }} />

        <div className="p-7">
          {/* Header & Badges */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate bg-gray-100 px-3 py-1 rounded-full">
              {product.badge}
            </span>
            {product.isVega ? (
              <div className="inline-flex items-center gap-1.5 bg-orange/10 text-orange text-[11px] font-bold px-3 py-1 rounded-full border border-orange/20 animate-pulse">
                <RefreshCw className="w-3 h-3" />
                <span>Salesman ↔ ERP</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Ready to Deploy</span>
              </div>
            )}
          </div>

          <h3 className="text-2xl font-black text-navy group-hover:text-orange transition-colors">
            {product.name}
          </h3>
          <p className="text-xs font-bold text-slate mt-1 mb-3">
            For: <span className="text-gray-900 font-semibold">{product.tagline}</span>
          </p>
          
          <p className="text-gray-700 text-sm leading-relaxed mb-5">
            {product.description}
          </p>

          {product.applicable && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 mb-4 text-xs font-semibold text-slate">
              <span className="text-navy font-bold block mb-1">Applicable Equipment:</span>
              <span>{product.applicable}</span>
            </div>
          )}

          {/* Feature List */}
          <div className="space-y-1.5 pt-2 border-t border-gray-100">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="p-6 pt-0 mt-4 border-t border-gray-100 bg-gray-50/50">
        <div className="pt-4 flex items-center justify-between">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-orange group-hover:text-orange-dark group-hover:translate-x-1 transition-all"
          >
            <span>Request Demo / Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-xs font-bold text-slate">Pune, MH</span>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const [ref, visible] = useReveal();

  return (
    <section id="products" className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          ref={ref} 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-4 border border-orange/20">
            <span>Product Ecosystem</span>
          </div>
          <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Solutions We've Built
          </h2>
          <p className="text-slate text-base sm:text-lg mt-4">
            Tested, field-proven software and mobile solutions designed for real Indian business workflows. Each system can be customized to match your exact business rules.
          </p>
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Custom Solution Prompt */}
        <div className="mt-16 text-center bg-white rounded-3xl p-8 border border-gray-200 shadow-sm max-w-3xl mx-auto">
          <h4 className="text-lg font-bold text-navy mb-2">
            Need custom modifications or a completely new business system?
          </h4>
          <p className="text-slate text-sm mb-5">
            We adapt any of these platforms or build from scratch around your specific company workflows.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-navy-light transition-colors"
          >
            <span>Talk to Our Software Architect</span>
            <ArrowRight className="w-4 h-4 text-orange" />
          </Link>
        </div>

      </div>
    </section>
  );
}
