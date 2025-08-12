import '../../styles/ProjectCard.sass';
import StackIcon from 'tech-stack-icons';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  techStack,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <article className="project-card keen-slider__slide">
      {/* Imagen con overlay */}
      <div className="project-card__image-container">
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={`${title} screenshot`} className="project-card__image" />
          <div className="project-card__overlay">
            <h3>{title}</h3>
          </div>
        </a>
      </div>

      {/* Contenido */}
      <div className="project-card__content">
        <p className="project-card__description">{description}</p>

        {/* Tech stack */}
        <div className="project-card__tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="project-card__tech-badge">
              <StackIcon name={tech.toLowerCase()} className="project-card__tech-icon" />
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="project-card__buttons">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <FaCode /> Code
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
