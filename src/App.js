import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import ProjectList from "./components/projectList/ProjectList";
import WhatIDo from "./components/whatido/WhatIDo";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? "dark" : ""} style={{ backgroundColor: darkMode ? "#1a1a1a" : "#fff", color: darkMode ? "#eee" : "#222" }}>
      <Navbar />
      <Toggle />
      <section id="home"><Intro /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="projects"><ProjectList /></section>
      <section id="whatido"><WhatIDo /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;
