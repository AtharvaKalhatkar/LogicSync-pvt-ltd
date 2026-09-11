import { useEffect } from 'react';
import CaseStudies from '../sections/CaseStudies';
import TrustBar from '../sections/TrustBar';
import CustomCTA from '../sections/CustomCTA';

function ProjectsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-4">Our Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">
            From Problem → To Working System
          </h1>
          <p className="text-slate text-lg mt-4 max-w-3xl mx-auto">
            Real businesses. Real workflows. Real solutions — a small milestone, a strong foundation.
          </p>
        </div>
      </section>
      <TrustBar />
      <CaseStudies />
      <CustomCTA />
    </main>
  );
}

export default ProjectsPage;
