import React from "react";
import "./Aboutme.scss";

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container">
      <h2 className="section-title">
        <span className="section-icon">&lt;/&gt;</span> AboutMe
        {" { }"}
      </h2>
      <div className="about-me-content">
        <div className="about-me-text">
          <p>
            As a Computer Science undergrad, I bring hands-on experience to the
            table, adept at designing, developing, and testing mobile apps. My
            proficiency lies in crafting top-quality, user-friendly, and
            responsive custom mobile and Flutter apps, showcasing a dedication
            to excellence in every project.
          </p>
          <br />
          <p>
            Specializing in Flutter, I combine technical prowess with a passion
            for creating seamless user experiences. Additionally, my skills
            extend to competitive programming, reflecting a commitment to
            precision and efficiency.
          </p>
          <br />
          <p>
            Driven by a genuine enthusiasm for the craft, I am ready to
            transform your app ideas into reality. Feel assured that I
            prioritize delivering exceptional quality, adhering to your
            requirements, and maintaining open communication throughout our
            collaboration.
          </p>
        </div>
        <div className="about-me-image">
          <img src={"naran1.jpg"} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
