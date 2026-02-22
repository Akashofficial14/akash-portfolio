import React from "react";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="min-h-screen max-w-full bg-[#F5FAF6] overflow-x-hidden">
      <Navbar />
      <div className="position pt-22 lg:pt-35">
        <Hero id="about" />
        <Work id="work" />
        <Skills id="skills" />
        <Contact id="contact" />
      </div>
    </div>
  );
};

export default App;
