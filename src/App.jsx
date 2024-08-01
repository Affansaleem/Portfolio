import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "./App.scss";
import Navbar from "./components/navBar/navbar";
import Header from "./components/header/header";
import Home from "./pages/HomePage/Home";
import AboutMe from "./pages/Aboutme/Aboutme";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/footer/Footer";
import License from "./components/license/License";
import ScrollAnimation from "./reusable/FadeInBottom";
import ScrollToTopButton from "./pages/ScrollTop/ScrollToTop";
const DEBOUNCE_TIME = 0;

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleMouseMove = debounce((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, DEBOUNCE_TIME);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const moveTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.3,
        y: prev.y + (mousePosition.y - prev.y) * 0.3,
      }));
      requestAnimationFrame(moveTrail);
    };
    moveTrail();
  }, [mousePosition]);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button if scrolled down 300px
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  const cursorStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    width: "25px",
    height: "25px",
    backgroundColor: "white",
    border: "2px solid #000", // Optional border
    borderRadius: "50%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add shadow
    background: "linear-gradient(45deg, #4e1ca5, #5e0452)", // Bright gradient
    pointerEvents: "none",
    transition: "transform 0.1s ease-out, background 0.2s",
    zIndex: 9999, // Ensure it is on top
  };

  const trailStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    transform: `translate(${trailPosition.x}px, ${trailPosition.y}px)`,
    width: "25px",
    height: "25px",
    backgroundColor: "rgba(114, 38, 175, 0.5)", // Trailing effect color
    borderRadius: "50%",
    pointerEvents: "none",
    transition: "transform 0.1s ease-out",
    zIndex: 9998,
  };

  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="content">
        <ScrollAnimation>
          <Home />
        </ScrollAnimation>
        <ScrollAnimation>
          <AboutMe />
        </ScrollAnimation>
        <ScrollAnimation>
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation>
          <Projects />
        </ScrollAnimation>
      </div>
      <Footer />
      <License />
      <motion.div className="cursor" style={cursorStyle} />
      <motion.div className="cursor-trail" style={trailStyle} />
      <ScrollToTopButton showButton={showScrollTopButton} />
    </div>
  );
};

export default App;
