import React, { useState } from 'react';
import manualLedger from '../assets/manual-ledger.jpg';
import manualBill from '../assets/manual-bill.jpg';
import aquaRegister from '../assets/aqua-desktop-register.png';
import aquaDashboard from '../assets/aqua-desktop-dashboard.png';

const Comparison = () => {
  const [view, setView] = useState('register'); // 'register' or 'billing'

  return (
    <section id="comparison" className="comparison">
      <div className="container">
        <div className="section-title">
          <h2>The Transformation: Before vs After</h2>
          <p>See exactly how we take a business from painful manual registers to fully synchronized digital ecosystems.</p>
        </div>

        <div className="comparison-toggle">
          <button 
            onClick={() => setView('register')} 
            className={`comparison-toggle-btn ${view === 'register' ? 'active' : ''}`}
          >
            Delivery Registry Comparison
          </button>
          <button 
            onClick={() => setView('billing')} 
            className={`comparison-toggle-btn ${view === 'billing' ? 'active' : ''}`}
          >
            Invoicing & Billing Comparison
          </button>
        </div>

        {view === 'register' ? (
          <div className="comparison-grid grid grid-2 animate-fade-in">
            {/* Before Card */}
            <div className="comparison-card glass pain-card">
              <div className="comparison-badge badge-pain">Before: Manual Pain</div>
              <div className="comparison-img-wrapper">
                <img src={manualLedger} alt="Manual Ledger Register" className="comparison-showcase-img" />
              </div>
              <div className="comparison-card-content">
                <h3>The Hand-Written Nightmare</h3>
                <p>Hours spent every single evening writing numbers in physical diaries, manually calculating attendance and jar tallies, and crossing out mistakes.</p>
                <ul className="comparison-list pain-list">
                  <li>❌ Extreme risk of handwriting misinterpretations</li>
                  <li>❌ No instant search - must scan pages manually</li>
                  <li>❌ Over 10+ hours wasted every single week on tallies</li>
                  <li>❌ Damaged or lost ledger books mean total data loss</li>
                </ul>
              </div>
            </div>

            {/* After Card */}
            <div className="comparison-card glass gain-card">
              <div className="comparison-badge badge-gain">After: LogicSync</div>
              <div className="comparison-img-wrapper">
                <img src={aquaRegister} alt="LogicSync Digital Register" className="comparison-showcase-img" />
              </div>
              <div className="comparison-card-content">
                <h3>The Cloud-Synced Registry</h3>
                <p>A pristine, automatic spreadsheet-style digital register. Load routes and insert delivery tallies in one click, synced to all devices instantly.</p>
                <ul className="comparison-list gain-list">
                  <li>✅ 100% perfect calculations automated by code</li>
                  <li>✅ Zero physical space - secure, cloud-saved backups</li>
                  <li>✅ Visual routes and filters to find data in seconds</li>
                  <li>✅ Generates print-ready Excel summaries instantly</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="comparison-grid grid grid-2 animate-fade-in">
            {/* Before Card */}
            <div className="comparison-card glass pain-card">
              <div className="comparison-badge badge-pain">Before: Manual Pain</div>
              <div className="comparison-img-wrapper">
                <img src={manualBill} alt="Manual Paper Invoice" className="comparison-showcase-img" />
              </div>
              <div className="comparison-card-content">
                <h3>Loose Handwritten Bills</h3>
                <p>Writing individual paper bills, manual addition prone to mathematical errors, and losing physical receipts before collection.</p>
                <ul className="comparison-list pain-list">
                  <li>❌ Simple calculation slips cause financial loss</li>
                  <li>❌ Hard to track pending bills and monthly credits</li>
                  <li>❌ Customers frequently misplace loose papers</li>
                  <li>❌ No backup copy for auditing or taxation</li>
                </ul>
              </div>
            </div>

            {/* After Card */}
            <div className="comparison-card glass gain-card">
              <div className="comparison-badge badge-gain">After: LogicSync</div>
              <div className="comparison-img-wrapper">
                <img src={aquaDashboard} alt="LogicSync Automated Billing" className="comparison-showcase-img" />
              </div>
              <div className="comparison-card-content">
                <h3>Automated SaaS Ledger</h3>
                <p>One unified dashboard tracking monthly income, pending collections, and customer balances automatically computed every billing cycle.</p>
                <ul className="comparison-list gain-list">
                  <li>✅ Auto-calculated bills with zero room for errors</li>
                  <li>✅ Instant automated WhatsApp billing reminders</li>
                  <li>✅ Pending bill logs alert driver on next delivery</li>
                  <li>✅ Fully digital transactions with built-in reports</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Comparison;
