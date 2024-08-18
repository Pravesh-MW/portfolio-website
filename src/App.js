import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Project from "./Components/Project";
import TechStack from "./Components/TechStack";
import Header from "./lib/Header";

function App() {
  return (
    <div className="relative w-full bg-gradient-to-r from-slate-300 to-slate-500">
      <Header />
      <Home />
      <Project />
      <Experience />
      <TechStack />
      <Contact />.
    </div>
  );
}

export default App;
