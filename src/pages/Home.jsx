import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CareersCTA from '../components/CareersCTA';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Products />
      <TechStack />
      <Process />
      <Testimonials />
      <CareersCTA />
      <Faq />
      <Contact />
    </main>
  );
};

export default Home;
