import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Comparison from '../components/Comparison';
import Transition from '../components/Transition';
import Calculator from '../components/Calculator';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Comparison />
      <Transition />
      <Calculator />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
};

export default Home;
