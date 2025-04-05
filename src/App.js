import React from 'react';
import Header from './lib/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import Experience from './Components/Experience';
import TechStack from './lib/TechStack';
import Contact from './Components/Contact';
import Resume from './lib/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Project />
      <Experience />
      <TechStack />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
