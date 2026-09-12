import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import HowItWorks from '../sections/HowItWorks';
import Products from '../sections/Products';
import Testimonials from '../sections/Testimonials';
import CaseStudies from '../sections/CaseStudies';
import CustomCTA from '../sections/CustomCTA';
import Contact from '../sections/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Products />
      <Testimonials />
      <CaseStudies />
      <CustomCTA />
      <Contact />
    </main>
  );
}

export default Home;
