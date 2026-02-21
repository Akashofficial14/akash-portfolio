import React from "react";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="min-h-screen max-w-full bg-[#F5FAF6] overflow-x-hidden">
      <Hero id="about" />
      <Work id="work" />
      <Skills id="skills" />
      <Contact id="contact" />
    </div>
  );
};

export default App;
