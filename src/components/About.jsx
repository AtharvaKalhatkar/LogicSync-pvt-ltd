import { CheckCircle2, Award, Zap, Lock, Users } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Delivered Projects' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Dedicated Support' }
];

const pillars = [
  {
    icon: <Zap size={22} />,
    title: 'High-Performance Architecture',
    desc: 'Lightweight, ultra-fast applications engineered to scale seamlessly as your business grows.'
  },
  {
    icon: <Lock size={22} />,
    title: 'Enterprise-Grade Security',
    desc: 'Automated encrypted cloud backups, role-based security, and strict data governance.'
  },
  {
    icon: <Users size={22} />,
    title: 'Dedicated Agile Team',
    desc: 'Direct collaboration with senior engineers who understand business logic and ROI.'
  },
  {
    icon: <Award size={22} />,
    title: 'End-to-End Ownership',
    desc: 'From initial architecture and UI/UX to cloud deployment and ongoing maintenance.'
  }
];

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-title">
          <span className="badge-pill">WHO WE ARE</span>
          <h2>Empowering Businesses with <span className="sync-text">Intelligent Technology</span></h2>
          <p>
            Based in Pune, LogicSync is a premier software engineering firm committed to building robust, 
            future-proof digital solutions for modern enterprises.
          </p>
        </div>

        <div className="about-grid grid grid-2">
          {/* Left Column: Story & Core Mission */}
          <div className="about-story glass">
            <h3>We Build Software That Drives Real Growth</h3>
            <p>
              At LogicSync, we bridge the gap between complex enterprise operations and intuitive, elegant software. 
              Whether you need to replace sluggish legacy processes with automated cloud platforms, build 
              mission-critical internal tools, or launch high-performance mobile applications, our engineers 
              deliver tailored solutions with speed and precision.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Custom-tailored business logic built specifically for your workflows</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Offline-first resilience ensuring zero downtime during network outages</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Transparent development cycles with weekly milestones and demonstrations</span>
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="btn btn-primary">
                Schedule a Consultation
              </a>
              <a href="#services" className="btn btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column: Values & Pillars */}
          <div className="about-pillars-column">
            <div className="pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="about-pillar-card glass">
                  <div className="pillar-icon-box">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4>{pillar.title}</h4>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="about-stats-strip glass">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item text-center">
              <div className="stat-val">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
