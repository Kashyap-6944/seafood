import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'reviews', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
