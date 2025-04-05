import React from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import Header from './lib/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import Experience from './Components/Experience';
import TechStack from './lib/TechStack';
import Resume from './lib/Resume';
import Contact from './Components/Contact';
import BackToTop from './Components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Home />
        <Project />
        <Experience />
        <TechStack />
        <Resume />
        <Contact />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
