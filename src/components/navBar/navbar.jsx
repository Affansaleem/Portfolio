import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [menuActive, setMenuActive] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    const offset = -120;
    const sectionPosition =
      section.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    setActiveSection(id);
    setMenuActive(false); // Close menu after selecting an item on mobile
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="haiii.png" alt="Logo" />
      </div>
      <div className="navbar__toggle" onClick={() => setMenuActive(!menuActive)}>
        ☰ {/* You can replace this with an icon */}
      </div>
      <ul className={`navbar__menu ${menuActive ? "active" : ""}`}>
        <li className={`navbar__item ${activeSection === "#home" ? "active" : ""}`}>
          <a
            href="#home"
            className="navbar__link"
            onClick={(e) => handleScroll(e, "#home")}
          >
            &lt;/Home&gt;
          </a>
        </li>
        <li className={`navbar__item ${activeSection === "#about" ? "active" : ""}`}>
          <a
            href="#about"
            className="navbar__link"
            onClick={(e) => handleScroll(e, "#about")}
          >
            &lt;/AboutMe&gt;
          </a>
        </li>
        <li className={`navbar__item ${activeSection === "#skills" ? "active" : ""}`}>
          <a
            href="#skills"
            className="navbar__link"
            onClick={(e) => handleScroll(e, "#skills")}
          >
            &lt;/Skills&gt;
          </a>
        </li>
        <li className={`navbar__item ${activeSection === "#projects" ? "active" : ""}`}>
          <a
            href="#projects"
            className="navbar__link"
            onClick={(e) => handleScroll(e, "#projects")}
          >
            &lt;/Projects&gt;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
