import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import '../styles/components.css';

const CareersCTA = () => {
  return (
    <section className="section bg-darker">
      <div className="container">
        <div className="glass-panel text-center" style={{ padding: '4rem 2rem', border: '1px solid var(--primary-dark)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
              <Users size={32} />
            </div>
          </div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Looking to Kickstart Your Career?</h2>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            We're actively hiring passionate interns to join our engineering, design, and marketing teams. Work on real projects that matter.
          </p>
          <Link to="/careers" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            View Open Internships <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
