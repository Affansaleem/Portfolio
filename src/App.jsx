import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.scss";
import "./index.css";
import Navbar from "./components/navBar/navbar";
import Header from "./components/header/header";
import { debounce } from "lodash";
import Home from "./pages/HomePage/Home";
import AboutMe from "./pages/Aboutme/Aboutme";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

const DEBOUNCE_TIME = 5;

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = debounce((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, DEBOUNCE_TIME);

  // Event listener setup and cleanup
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // CSS style for the custom cursor
  const cursorStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    backgroundColor: "white",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    pointerEvents: "none",
  };

  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="content">
        <Home />
        <AboutMe />
      </div>
      <Skills />
      <Projects />
      <motion.div className="cursor" style={cursorStyle} />
    </div>
  );
};

export default App;
