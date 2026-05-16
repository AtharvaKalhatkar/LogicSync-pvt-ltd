import React, { useState } from 'react';
import { DollarSign, Clock, Zap } from 'lucide-react';

const Calculator = () => {
  const [dailyEntries, setDailyEntries] = useState(150);
  const [manualMinutes, setManualMinutes] = useState(90);

  // Math
  const monthlyManualHours = Math.round((manualMinutes * 30) / 60);
  const monthlyLogicSyncHours = Math.round(monthlyManualHours * 0.1); // We save 90% of the time
  const hoursSaved = monthlyManualHours - monthlyLogicSyncHours;
  
  // Approximate financial value based on Indian operational/admin labor rates (approx ₹200/hr)
  const financialSavings = hoursSaved * 200;

  return (
    <section id="calculator" className="calculator">
      <div className="container">
        <div className="section-title">
          <h2>Calculate Your Savings</h2>
          <p>Estimate the massive amount of time and money your business wastes on manual paperwork every single month.</p>
        </div>

        <div className="calculator-wrapper glass grid grid-2 animate-fade-in">
          {/* Sliders Control Panel */}
          <div className="calculator-controls">
            <h3>Configure Your Business Profile</h3>
            
            <div className="slider-group">
              <div className="slider-header">
                <span>Daily Deliveries / Transactions:</span>
                <span className="slider-value">{dailyEntries} transactions</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="1000" 
                step="10"
                value={dailyEntries} 
                onChange={(e) => setDailyEntries(Number(e.target.value))} 
                className="custom-range"
              />
              <span className="slider-hint">Total drop-offs, bills generated, or client ledger entries per day.</span>
            </div>

            <div className="slider-group">
              <div className="slider-header">
                <span>Daily Paperwork & Tallying Time:</span>
                <span className="slider-value">{manualMinutes} minutes</span>
              </div>
              <input 
                type="range" 
                min="15" 
                max="360" 
                step="15"
                value={manualMinutes} 
                onChange={(e) => setManualMinutes(Number(e.target.value))} 
                className="custom-range"
              />
              <span className="slider-hint">Time spent writing diaries, doing manual additions, and billing clients at day-end.</span>
            </div>
          </div>

          {/* Results Panel */}
          <div className="calculator-results">
            <h3>Your LogicSync ROI Breakdown</h3>
            
            <div className="results-grid">
              {/* Stat 1 */}
              <div className="result-card glass">
                <div className="result-icon icon-blue">
                  <Clock size={24} />
                </div>
                <div>
                  <span className="result-label">Admin Time Saved</span>
                  <div className="result-val">{hoursSaved} Hours / mo</div>
                  <span className="result-subtext">Manual Work: {monthlyManualHours} hrs | LogicSync: {monthlyLogicSyncHours} hrs</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="result-card glass">
                <div className="result-icon icon-purple">
                  <Zap size={24} />
                </div>
                <div>
                  <span className="result-label">Operational Efficiency</span>
                  <div className="result-val">90% Faster</div>
                  <span className="result-subtext">Instant automated tallying and WhatsApp dispatch.</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="result-card glass highlight-savings">
                <div className="result-icon icon-green">
                  <span className="currency-symbol">₹</span>
                </div>
                <div>
                  <span className="result-label">Estimated Monthly Savings</span>
                  <div className="result-val font-accent">₹{financialSavings.toLocaleString('en-IN')}</div>
                  <span className="result-subtext">Direct admin cost savings from eliminating error leakages.</span>
                </div>
              </div>
            </div>

            <div className="calculator-cta">
              <a href="#contact" className="btn btn-primary w-full">
                Claim My Automated System
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
