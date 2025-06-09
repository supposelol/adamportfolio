import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Landing from './landing/landing';
import About from './about/about';
import SampleWorks from './sampleWorks/sampleworks';
import Contact from './contact/contact';
import Footer from './footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/sampleworks" element={<SampleWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About />
        <SampleWorks />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
