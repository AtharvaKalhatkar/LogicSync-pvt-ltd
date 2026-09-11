import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import ProblemSection from '../sections/ProblemSection';
import WhatWeDo from '../sections/WhatWeDo';
import Process from '../sections/Process';
import Products from '../sections/Products';
import Industries from '../sections/Industries';
import WhyLogicSync from '../sections/WhyLogicSync';
import CaseStudies from '../sections/CaseStudies';
import AISection from '../sections/AISection';
import CustomCTA from '../sections/CustomCTA';
import About from '../sections/About';
import Contact from '../sections/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <WhatWeDo />
      <Process />
      <Products />
      <Industries />
      <WhyLogicSync />
      <CaseStudies />
      <AISection />
      <CustomCTA />
      <About />
      <Contact />
    </main>
  );
}

export default Home;
