import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Landing from './landing/landing';
import About from './about/about';
import SampleWorks from './sampleWorks/sampleworks';
import Contact from './contact/contact';
import Footer from './footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <SampleWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;