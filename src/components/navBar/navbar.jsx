import "./navbar.scss";

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    const offset = -120; // Adjust this value to set the offset above the section
    const sectionPosition =
      section.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="haiii.png" alt="Logo" />
      </div>
      <ul className="navbar__menu flex space-x-8 text-white text-sm font-mono">
        <li className="navbar__item">
          <a
            href="#home"
            className="text-lg navbar__link relative no-underline transition-all duration-500 hover:text-white hover:text-2xl hover:before:content-['•'] hover:before:text-2xl"
            onClick={(e) => handleScroll(e, "#home")}
          >
            &lt;/Home&gt;
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="#about"
            className="text-lg navbar__link relative no-underline transition-all duration-500 hover:text-white hover:text-2xl hover:before:content-['•'] hover:before:text-2xl"
            onClick={(e) => handleScroll(e, "#about")}
          >
            &lt;/AboutMe&gt;
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="#skills"
            className="text-lg navbar__link relative no-underline transition-all duration-500 hover:text-white hover:text-2xl hover:before:content-['•'] hover:before:text-2xl"
            onClick={(e) => handleScroll(e, "#skills")}
          >
            &lt;/Skills&gt;
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="#projects"
            className="text-lg navbar__link relative no-underline transition-all duration-500 hover:text-white hover:text-2xl hover:before:content-['•'] hover:before:text-2xl"
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
