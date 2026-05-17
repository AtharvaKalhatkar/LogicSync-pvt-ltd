import React from 'react';
import { Shield, RefreshCw, Layers, TrendingUp, Clock, AlertTriangle, CheckCircle, Smartphone, Laptop } from 'lucide-react';

const Transition = () => {
  return (
    <section id="transition" className="transition-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <h2>Business Transition</h2>
          <p>From slow, error-prone paper registers to automated, smart digital management.</p>
        </div>

        {/* Before vs After Grid */}
        <div className="transition-grid grid grid-2">
          {/* Column 1: Feature Pillars & Trust Badges */}
          <div className="transition-info animate-fade-in">
            <h3 className="gradient-text font-bold">Smarter Today. Stronger Tomorrow.</h3>
            <p className="subtitle">
              We empower local enterprises and traditional businesses in Pune by completely 
              replacing legacy manual registers with robust, secure cloud-synchronized applications.
            </p>

            {/* Core Pillars */}
            <div className="transition-pillars">
              <div className="pillar-item glass">
                <div className="pillar-icon icon-orange">
                  <Shield size={22} />
                </div>
                <div>
                  <h4>Secure Cloud Database</h4>
                  <p>Your business data is always safe, highly encrypted, and backed up in real-time.</p>
                </div>
              </div>

              <div className="pillar-item glass">
                <div className="pillar-icon icon-orange">
                  <RefreshCw size={22} />
                </div>
                <div>
                  <h4>Real-time Synchronization</h4>
                  <p>Access client deliveries, vaults, and billing anytime, anywhere across all devices.</p>
                </div>
              </div>

              <div className="pillar-item glass">
                <div className="pillar-icon icon-orange">
                  <Layers size={22} />
                </div>
                <div>
                  <h4>Custom Digital Solutions</h4>
                  <p>Engineered specifically to solve your delivery, stock, and ledger bottlenecks.</p>
                </div>
              </div>

              <div className="pillar-item glass">
                <div className="pillar-icon icon-orange">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <h4>Scalable Agency Growth</h4>
                  <p>Lightweight software configurations designed to scale alongside your business revenue.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges-grid grid grid-3">
              <div className="trust-badge glass text-center">
                <div className="badge-val">100+</div>
                <div className="badge-lbl">Happy Clients</div>
              </div>
              <div className="trust-badge glass text-center">
                <div className="badge-val">99.9%</div>
                <div className="badge-lbl">System Uptime</div>
              </div>
              <div className="trust-badge glass text-center">
                <div className="badge-val">24/7</div>
                <div className="badge-lbl">Direct Support</div>
              </div>
            </div>
          </div>

          {/* Column 2: Layered Mockups Container */}
          <div className="transition-mockup-wrapper animate-fade-in">
            <div className="mockup-display">
              {/* Dark Solar Glowing Backdrop */}
              <div className="solar-glow"></div>
              
              {/* Laptop Frame Mockup */}
              <div className="laptop-mockup glass">
                <div className="laptop-screen">
                  <div className="screen-header">
                    <span className="dot dot-1"></span>
                    <span className="dot dot-2"></span>
                    <span className="dot dot-3"></span>
                    <span className="screen-title-text">Bhairavnath Cool Aqua - Dashboard</span>
                  </div>
                  <div className="screen-content">
                    {/* Simulated Dashboard UI */}
                    <div className="sim-stats">
                      <div className="sim-stat">
                        <span>Total Customers</span>
                        <strong>14 Clients</strong>
                      </div>
                      <div className="sim-stat">
                        <span>Today Jars</span>
                        <strong className="color-orange">150 Jars</strong>
                      </div>
                      <div className="sim-stat">
                        <span>Monthly Sales</span>
                        <strong>₹7,533</strong>
                      </div>
                    </div>
                    <div className="sim-chart-bar">
                      <div className="bar-fill" style={{ width: '85%' }}></div>
                    </div>
                    <div className="sim-routes">
                      <div className="route-item"><span>Chakan Route</span> <strong>9 Clients</strong></div>
                      <div className="route-item"><span>Talegaon Route</span> <strong>3 Clients</strong></div>
                    </div>
                  </div>
                </div>
                <div className="laptop-base"></div>
              </div>

              {/* Floating Mobile Companion Mockup */}
              <div className="mobile-mockup-floating glass">
                <div className="mobile-screen">
                  <div className="mobile-header">
                    <span className="speaker"></span>
                  </div>
                  <div className="mobile-content">
                    <div className="app-logo">💧</div>
                    <h5>Bhairavnath Aqua</h5>
                    <span className="badge-status">Connected</span>
                    <div className="app-actions">
                      <div className="app-btn">Logs</div>
                      <div className="app-btn active">Clients</div>
                      <div className="app-btn">Vault</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Trust Cards */}
        <div className="pillars-strip grid grid-5">
          <div className="strip-card glass">
            <Clock size={20} className="icon-orange" />
            <div>
              <h5>SAVES TIME</h5>
              <p>Automates daily operations.</p>
            </div>
          </div>

          <div className="strip-card glass">
            <CheckCircle size={20} className="icon-orange" />
            <div>
              <h5>IMPROVES ACCURACY</h5>
              <p>Reduces manual human errors.</p>
            </div>
          </div>

          <div className="strip-card glass">
            <TrendingUp size={20} className="icon-orange" />
            <div>
              <h5>BOOSTS PRODUCTIVITY</h5>
              <p>More deliveries, less effort.</p>
            </div>
          </div>

          <div className="strip-card glass">
            <Shield size={20} className="icon-orange" />
            <div>
              <h5>SECURES DATA</h5>
              <p>Safe, backed up & accessible.</p>
            </div>
          </div>

          <div className="strip-card glass">
            <TrendingUp size={20} className="icon-orange" />
            <div>
              <h5>GROWS BUSINESS</h5>
              <p>Data-driven decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transition;
