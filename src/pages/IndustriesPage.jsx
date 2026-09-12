import { useEffect } from 'react';
import Industries from '../sections/Industries';
import CustomCTA from '../sections/CustomCTA';

function IndustriesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-4">Industries We Serve</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">
            Built for Real Businesses
          </h1>
          <p className="text-slate text-lg mt-4 max-w-3xl mx-auto">
            We work with businesses across industries understanding unique workflows and building systems that fit.
          </p>
        </div>
      </section>
      <Industries />
      <CustomCTA />
    </main>
  );
}

export default IndustriesPage;
