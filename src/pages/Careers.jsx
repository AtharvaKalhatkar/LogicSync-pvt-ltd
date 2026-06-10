import React, { useEffect } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Code, PenTool, Server, Layers } from 'lucide-react';
import '../styles/components.css';

const internshipRoles = [
  {
    id: 1,
    title: 'UI/UX Design Intern',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time / Part-time',
    icon: <PenTool size={24} className="role-icon" />,
    description: 'Assist in designing wireframes, prototypes, and high-fidelity mockups for our web applications. Bring creative solutions to user flow challenges.',
    requirements: ['0 - 1 years experience (Freshers welcome)', 'Familiarity with Figma or Adobe XD', 'Basic understanding of design principles', 'Portfolio of previous work/concepts']
  },
  {
    id: 2,
    title: 'Frontend Developer Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time / Part-time',
    icon: <Code size={24} className="role-icon" />,
    description: 'Help us build stunning, responsive user interfaces using React and modern CSS frameworks. You will work closely with our core engineering team.',
    requirements: ['0 - 1 years experience (Freshers welcome)', 'Experience with React and JavaScript', 'Strong understanding of CSS/HTML', 'Eye for design and UX']
  },
  {
    id: 3,
    title: 'Backend Developer Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time / Part-time',
    icon: <Server size={24} className="role-icon" />,
    description: 'Work on building robust APIs, managing databases, and ensuring smooth server-side operations for our web applications.',
    requirements: ['0 - 1 years experience (Freshers welcome)', 'Basic knowledge of Node.js, Python, or similar backend languages', 'Understanding of RESTful APIs', 'Familiarity with databases (SQL/NoSQL)']
  },
  {
    id: 4,
    title: 'Full Stack Developer Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    icon: <Layers size={24} className="role-icon" />,
    description: 'Get hands-on experience across the entire development stack. You will build features from the database all the way to the user interface.',
    requirements: ['0 - 1 years experience (Freshers welcome)', 'Understanding of both frontend and backend technologies', 'Problem-solving mindset', 'Eagerness to learn new frameworks quickly']
  }
];

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="careers-page">
      {/* Careers Hero Section */}
      <section className="hero-section careers-hero">
        <div className="container hero-container text-center">
          <div className="hero-badge">
            <span className="pulse-dot"></span> Join the Team
          </div>
          <h1 className="hero-title">
            Build the <span className="gradient-text">Future</span> With Us
          </h1>
          <p className="hero-subtitle">
            We're looking for passionate, driven interns to join our fast-growing team. Get real-world experience, mentorship, and work on projects that matter.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section bg-darker">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why <span className="gradient-text">Intern</span> at LogicSync?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card glass-panel">
              <h3 className="feature-title">Real Projects</h3>
              <p className="feature-desc">No fetching coffee here. You will write code, design interfaces, or run campaigns that go straight into production.</p>
            </div>
            <div className="feature-card glass-panel">
              <h3 className="feature-title">Mentorship</h3>
              <p className="feature-desc">Work directly with senior team members who are dedicated to helping you grow your skills and career.</p>
            </div>
            <div className="feature-card glass-panel">
              <h3 className="feature-title">Flexible Remote Work</h3>
              <p className="feature-desc">Work from anywhere. We value output and creativity over strict working hours or being in a cubicle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="section" id="open-roles">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Open <span className="gradient-text">Internships</span></h2>
            <p className="section-subtitle">Find the role that fits your passion and skills.</p>
          </div>

          <div className="roles-grid">
            {internshipRoles.map((role) => (
              <div key={role.id} className="role-card glass-panel">
                <div className="role-header">
                  <div className="role-icon-wrapper">
                    {role.icon}
                  </div>
                  <span className="role-department">{role.department}</span>
                </div>
                <h3 className="role-title">{role.title}</h3>
                
                <div className="role-meta">
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{role.location}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{role.type}</span>
                  </div>
                </div>
                
                <p className="role-description">{role.description}</p>
                
                <div className="role-requirements">
                  <h4>What we're looking for:</h4>
                  <ul>
                    {role.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <a href={`mailto:careers@logicsync.digital?subject=Application for ${role.title} Internship`} className="btn btn-outline apply-btn">
                  Apply Now <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="section bg-gradient cta-section">
        <div className="container text-center">
          <h2>Don't see a perfect fit?</h2>
          <p>We are always looking for talented individuals. Send us your resume and tell us how you can contribute.</p>
          <a href="mailto:careers@logicsync.digital?subject=General Internship Application" className="btn btn-primary cta-btn">
            Send General Application
          </a>
        </div>
      </section>
    </main>
  );
};

export default Careers;
