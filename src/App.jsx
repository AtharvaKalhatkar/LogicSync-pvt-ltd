import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundBlobs from './components/BackgroundBlobs';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import Careers from './pages/Careers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <BackgroundBlobs />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        
        <Footer />
        {/* Floating Interactive WhatsApp Support Widget */}
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
