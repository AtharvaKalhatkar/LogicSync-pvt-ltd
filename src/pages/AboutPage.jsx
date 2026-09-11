import { useEffect } from 'react';
import About from '../sections/About';
import WhyLogicSync from '../sections/WhyLogicSync';
import TrustBar from '../sections/TrustBar';
import CustomCTA from '../sections/CustomCTA';

function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">
            We Build Systems That Make Businesses Simpler
          </h1>
          <p className="text-slate text-lg mt-4 max-w-3xl mx-auto">
            LogicSync Digital is a software, automation and business systems company that helps businesses simplify operations through technology.
          </p>
        </div>
      </section>
      <About />
      <WhyLogicSync />
      <TrustBar />
      <CustomCTA />
    </main>
  );
}

export default AboutPage;
