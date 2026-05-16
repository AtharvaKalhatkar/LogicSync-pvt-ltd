import React from 'react';
import Navbar from './components/Navbar';
import BackgroundBlobs from './components/BackgroundBlobs';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Comparison from './components/Comparison';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BackgroundBlobs />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Comparison />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}




export default App;
