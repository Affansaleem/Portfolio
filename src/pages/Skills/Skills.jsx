import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Lottie from "lottie-react";
import "./Skills.scss";
import javascriptAnimation from "../../../public/lottie/react.json";
import firebase from "../../../public/lottie/firebase.json";
import github from "../../../public/lottie/github.json";
import git from "../../../public/lottie/git.json";
import photoshop from "../../../public/lottie/photoshop.json";

function Skills() {
  useEffect(() => {
    anime({
      targets: ".skill-item",
      translateX: 250,
      rotate: "1turn",
      backgroundColor: "#FFF",
      duration: 800,
      delay: anime.stagger(100, { start: 500 }),
    });

    anime({
      targets: ".skill-card",
      scale: [0, 1],
      duration: 1000,
      easing: "easeInOutExpo",
      delay: anime.stagger(200, { start: 1000 }),
    });
  }, []);

  return (
    <div id="skills" className="skills-container">
      <h2 className="section-title text-white">
        <span className="section-icon">&lt;/&gt;</span> Skills
        {" {-------}"}
      </h2>
      <div className="skills-grid">
        <div className="skill-card">
          <Lottie animationData={javascriptAnimation} className="skill-logo" />
          <p className="skill-name">REACT JS</p>
        </div>
        <div className="skill-card">
          <img src="images/flutter.png" alt="flutter" className="skill-logo" />
          <p className="skill-name">FLUTTER</p>
        </div>
        <div className="skill-card">
          <Lottie animationData={firebase} className="skill-logo" />
          <p className="skill-name">FIREBASE</p>
        </div>
        <div className="skill-card">
          <Lottie animationData={github} className="skill-logo" />
          <p className="skill-name">GITHUB</p>
        </div>
        <div className="skill-card">
          <Lottie animationData={git} className="skill-logo" />
          <p className="skill-name">GIT</p>
        </div>
        <div className="skill-card">
          <img src="images/asp.png" alt="flutter" className="skill-logo" />
          <p className="skill-name">ASP .NET CORE</p>
        </div>
        <div className="skill-card">
          <img src="images/laravel.png" alt="laravel" className="skill-logo" />
          <p className="skill-name">LARAVEL</p>
        </div>
        <div className="skill-card">
          <img src="images/mongodb.png" alt="mongo" className="skill-logo" />
          <p className="skill-name">MONGO DB</p>
        </div>
        <div className="skill-card">
          <img src="images/php.png" alt="php" className="skill-logo" />
          <p className="skill-name">PHP</p>
        </div>
        <div className="skill-card">
          <img src="images/csharp.png" alt="csharp" className="skill-logo" />
          <p className="skill-name">C#</p>
        </div>
        <div className="skill-card">
          <img src="images/java.png" alt="java" className="skill-logo" />
          <p className="skill-name">JAVA</p>
        </div>
        <div className="skill-card">
          <Lottie animationData={photoshop} className="skill-logo" />
          <p className="skill-name">PHOTOSHOP</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
