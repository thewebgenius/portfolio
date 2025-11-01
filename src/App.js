import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import AITools from './components/AITools';
import Statistics from './components/Statistics';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ChatBot from './components/ChatBot';
import './styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Enable smooth scroll globally
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <LoadingScreen />
      <Navigation />
      <button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <Hero />
      <About />
      <AITools />
      <Statistics />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
      <ChatBot />
    </div>
  );
}

export default App;