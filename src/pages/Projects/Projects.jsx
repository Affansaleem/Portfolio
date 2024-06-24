import React from "react";
import ProjectCard from "../../reusable/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Flutter - Full Stack Attendance Mobile Application",
      description:
        "Optimize workforce tracking through dual portals for admins and employees. Configure geofences seamlessly for precise attendance control, enhancing operational efficiency.",
      githubLink: "https://github.com/Affansaleem/Pioneer-Final-Version",
      liveViewLink: "https://github.com/Affansaleem/Pioneer-Final-Version",
      images: [
        "images/flutter.png",
        "images/csharp.png",
        "images/asp.png",
        "images/pioneer.png",
      ],
    },
    {
      title: "React JS - Links Traders",
      description:
        "Links Traders: A Showcase of Unparalleled Business Prowess Crafted with meticulous precision, Links Traders is a captivating React.js-powered application designed to showcase the client's thriving business.",
      githubLink: "https://github.com/Affansaleem/LinkTraders",
      liveViewLink: "https://github.com/Affansaleem/LinkTraders",
      images: [
        "images/react.png",
        "images/react_router.png",
        "images/redux.png",
        "images/linktraders.PNG",
      ],
    },
    {
      title: "React JS - Fast React Pizza",
      description:
        "A realtime weather monitoring app based on openweathermap API. The app can locate current location with GPS and show respected weather with upcoming 12 hours of updates and 7 days of weather forecast.",
      githubLink: "https://github.com/Affansaleem/fast-react-pizza",
      liveViewLink: "https://github.com/Affansaleem/fast-react-pizza",
      images: [
        "images/react.png",
        "images/react_router.png",
        "images/tailwind.png",
        "images/fastpizza.PNG",
      ],
    },
    {
      title: "REACT JS - Full Stack React Quiz Application",
      description:
        "A realtime weather monitoring app based on openweathermap API. The app can locate current location with GPS and show respected weather with upcoming 12 hours of updates and 7 days of weather forecast.",
      githubLink: "https://github.com/Affansaleem/react-quiz",
      liveViewLink: "https://github.com/Affansaleem/react-quiz",
      images: [
        "images/react.png",
        "images/nodejs.png",
        "images/sass.png",
        "images/quiz.PNG",
      ],
    },
    {
      title: ".NET CORE - Web Api - Social Media App",
      description:
        "A realtime weather monitoring app based on openweathermap API. The app can locate current location with GPS and show respected weather with upcoming 12 hours of updates and 7 days of weather forecast.",
      githubLink: "https://github.com/Affansaleem/BrainiacsApi",
      liveViewLink: "https://github.com/Affansaleem/BrainiacsApi",
      images: [
        "images/csharp.png",
        "images/asp.png",
        "images/swagger.png",
        "images/brainiacsapi.PNG",
      ],
    },
  ];

  return (
    <div id="projects" className="projects-container mt-10">
      <h2 className="section-title text-white text-2xl">
        <span className="section-icon">&lt;/&gt;</span> Projects
        {" { }"}
      </h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
          liveViewLink={project.liveViewLink}
          images={project.images}
        />
      ))}
    </div>
  );
}

export default Projects;
