import { Compass, Code2, Rocket, Headset } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: <Compass size={26} />,
    title: 'Discovery & Workflow Mapping',
    desc: 'We analyze your current manual workflows, spreadsheets, and bottlenecks to craft an architectural roadmap tailored to your operations.'
  },
  {
    step: '02',
    icon: <Code2 size={26} />,
    title: 'Custom Engineering & Agile Sprints',
    desc: 'Our engineers build your solution using modern stacks with clean code, weekly interactive demo milestones, and direct communication.'
  },
  {
    step: '03',
    icon: <Rocket size={26} />,
    title: 'Cloud Deployment & Onboarding',
    desc: 'We migrate your legacy records seamlessly, configure encrypted cloud synchronization, and conduct hands-on training for your entire team.'
  },
  {
    step: '04',
    icon: <Headset size={26} />,
    title: 'Continuous Scaling & 24/7 SLA',
    desc: 'Post-launch dedicated support ensures your systems remain blazing fast, ultra-secure, and ready to scale alongside company growth.'
  }
];

const Process = () => {
  return (
    <section id="process" className="process-section section bg-darker">
      <div className="container">
        <div className="section-title">
          <span className="badge-pill">OUR METHODOLOGY</span>
          <h2>How We Deliver <span className="sync-text">Predictable Success</span></h2>
          <p>
            A disciplined, four-phase engineering framework designed to deliver high-quality 
            software on time and within scope.
          </p>
        </div>

        <div className="process-grid grid grid-4">
          {steps.map((item, idx) => (
            <div key={idx} className="process-card glass">
              <div className="process-top">
                <span className="step-number">{item.step}</span>
                <div className="process-icon-box">
                  {item.icon}
                </div>
              </div>
              <h3 className="process-title">{item.title}</h3>
              <p className="process-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
