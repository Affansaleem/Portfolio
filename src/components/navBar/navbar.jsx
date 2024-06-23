import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const bounceTransition = {
    type: "spring",
    stiffness: 500,
    damping: 20,
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="hellooo.png" alt="Logo" />
      </div>
      <ul className="navbar__menu flex space-x-8 text-white text-sm font-mono">
        <li className="navbar__item">
          <a
            href="#home"
            className="text-lg navbar__link relative no-underline transition-all duration-500 hover:text-white  hover:text-2xl hover:before:content-['•']  hover:before:text-2xl"
          >
            &lt;/Home&gt;
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="#about"
            className="text-lg navbar__link relative no-underline transition-all duration-500 hover:text-white  hover:text-2xl hover:before:content-['•']  hover:before:text-2xl"
          >
            &lt;/AboutMe&gt;
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="#skills"
            className="text-lg navbar__link relative no-underline transition-all duration-500 hover:text-white  hover:text-2xl hover:before:content-['•']  hover:before:text-2xl"
          >
            &lt;/Skills&gt;
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="#projects"
            className="text-lg navbar__link relative no-underline transition-all duration-500 hover:text-white  hover:text-2xl hover:before:content-['•']  hover:before:text-2xl"
          >
            &lt;/Projects&gt;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
