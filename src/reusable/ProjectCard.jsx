import "./ProjectCard.scss";

function ProjectCard({ title, description, githubLink, liveViewLink, images }) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        {images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Icon ${index + 1}`}
            className="project-card__icon"
          />
        ))}
      </div>
      <div className="project-card__body">
        <div className="project-card__content">
          <h2 className="project-card__title">{title}</h2>
          <p className="project-card__description">{description}</p>
          <div className="project-card__buttons">
            <a
              href={githubLink}
              className="btn btn--github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
            <a
              href={liveViewLink}
              className="btn btn--live-view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live View
            </a>
          </div>
        </div>
        <div className="project-card__image">
          <img src={images[3]} alt="Project screenshot" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
