import { useEffect } from 'react';
import WhatWeDo from '../sections/WhatWeDo';
import Process from '../sections/Process';
import CustomCTA from '../sections/CustomCTA';

function SolutionsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-4">Our Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">
            Smart Digital Solutions for Every Business
          </h1>
          <p className="text-slate text-lg mt-4 max-w-3xl mx-auto">
            From custom software and mobile apps to business automation and AI we build systems that simplify how your business operates.
          </p>
        </div>
      </section>
      <WhatWeDo />
      <Process />
      <CustomCTA />
    </main>
  );
}

export default SolutionsPage;
