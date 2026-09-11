import { Code2, Layers, Cpu, Database, Cloud, ShieldCheck } from 'lucide-react';

const techCategories = [
  {
    icon: <Code2 size={24} />,
    name: 'Frontend & UI',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    icon: <Layers size={24} />,
    name: 'Mobile Engineering',
    technologies: ['Flutter', 'React Native', 'Offline PWA', 'Android SDK']
  },
  {
    icon: <Cpu size={24} />,
    name: 'Backend & APIs',
    technologies: ['Node.js', 'Python', 'Java', 'REST & GraphQL', 'Microservices']
  },
  {
    icon: <Database size={24} />,
    name: 'Databases & Storage',
    technologies: ['PostgreSQL', 'MySQL', 'Supabase', 'Redis', 'MongoDB']
  },
  {
    icon: <Cloud size={24} />,
    name: 'Cloud & Infrastructure',
    technologies: ['AWS', 'Docker', 'Linux Servers', 'CI/CD Pipelines', 'Nginx']
  },
  {
    icon: <ShieldCheck size={24} />,
    name: 'Architecture & Security',
    technologies: ['Offline-First Sync', 'JWT & OAuth', 'Automated Backups', 'Data Encryption']
  }
];

const TechStack = () => {
  return (
    <section className="tech-stack-section section">
      <div className="container">
        <div className="section-title">
          <span className="badge-pill">OUR TECH STACK</span>
          <h2>Built With Modern, <span className="sync-text">Battle-Tested Technologies</span></h2>
          <p>
            We leverage high-performance frameworks and reliable cloud infrastructure 
            to ensure your software is fast, scalable, and secure.
          </p>
        </div>

        <div className="tech-grid grid grid-3">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="tech-card glass">
              <div className="tech-card-header">
                <div className="tech-icon-box">
                  {cat.icon}
                </div>
                <h4>{cat.name}</h4>
              </div>
              <div className="tech-tags-list">
                {cat.technologies.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
