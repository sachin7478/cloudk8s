import './App.css';
import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimateOnLoad from './components/AnimateOnLoad';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import Contact from './components/Contact';

function App() {
  const animationsRunRef = useRef(false);

  return (
    <div className="App font-sans text-indigo-900 bg-gradient-to-b from-indigo-50 via-white to-purple-50">

      <Header />

      <AnimateOnLoad runRef={animationsRunRef} />
      <main>
        <Hero />
        <ServicesSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
