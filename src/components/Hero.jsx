import { ArrowRight, Sparkles, CheckCircle2, Shield, Zap, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content text-center">
          {/* Top Badge */}
          <div className="hero-badge animate-fade-in">
            <Sparkles size={16} className="badge-icon" />
            <span>SOFTWARE ENGINEERING & DIGITAL TRANSFORMATION</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-heading animate-fade-in">
            Architecting Modern Software to <br />
            <span className="sync-text">Accelerate Your Enterprise</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description animate-fade-in">
            LogicSync Digital engineers high-performance custom ERPs, scalable cloud platforms, 
            offline-first mobile applications, and automated workflows designed to streamline operations 
            and maximize business growth.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group animate-fade-in">
            <a href="#contact" className="btn btn-primary btn-large">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="#products" className="btn btn-outline btn-large">
              Explore Products
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="hero-trust-bar animate-fade-in">
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>Offline-First Resilience</span>
            </div>
            <div className="trust-item">
              <Shield size={18} className="trust-icon" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="trust-item">
              <Zap size={18} className="trust-icon" />
              <span>99.9% System Uptime</span>
            </div>
          </div>
        </div>

        {/* Floating System Visual Display */}
        <div className="hero-showcase-wrapper animate-fade-in">
          <div className="system-preview-card glass">
            <div className="preview-card-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <Terminal size={14} />
                <span>logicsync-enterprise-core ~ active</span>
              </div>
              <div className="window-status">
                <span className="status-indicator"></span>
                <span>Production Online</span>
              </div>
            </div>

            <div className="preview-card-body">
              <div className="preview-metric-grid">
                <div className="preview-metric glass">
                  <div className="metric-label">Active Deployments</div>
                  <div className="metric-number">50+</div>
                  <div className="metric-change text-green">↑ 100% Operational</div>
                </div>
                <div className="preview-metric glass">
                  <div className="metric-label">Cloud Sync Speed</div>
                  <div className="metric-number">&lt; 150ms</div>
                  <div className="metric-change text-green">Real-time bi-directional</div>
                </div>
                <div className="preview-metric glass">
                  <div className="metric-label">Data Redundancy</div>
                  <div className="metric-number">2-Hour</div>
                  <div className="metric-change text-green">Automated snapshots</div>
                </div>
              </div>

              <div className="preview-code-block glass">
                <div className="code-line"><span className="code-comment">// LogicSync Core Architecture</span></div>
                <div className="code-line"><span className="code-keyword">const</span> system = <span className="code-keyword">await</span> LogicSync.<span className="code-func">initializeEngine</span>({'{'}</div>
                <div className="code-line indent">architecture: <span className="code-string">'Offline-First Distributed'</span>,</div>
                <div className="code-line indent">database: <span className="code-string">'PostgreSQL + Supabase Cloud'</span>,</div>
                <div className="code-line indent">automation: <span className="code-string">'WhatsApp GST POS & Live Ledgers'</span>,</div>
                <div className="code-line indent">security: <span className="code-string">'AES-256 Cloud Encrypted'</span></div>
                <div className="code-line">{'}'});</div>
                <div className="code-line"><span className="code-keyword">return</span> system.<span className="code-func">launchEnterpriseSuccess</span>();</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
