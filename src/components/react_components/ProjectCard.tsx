import '../../styles/ProjectCard.sass';
import StackIcon from 'tech-stack-icons';

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
      <img src={imageUrl} alt={`${title} screenshot`} className="project-card__image" />
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tech-stack">
          {techStack.map((tech, index) => (
            <span key={tech} className="project-card__tech">
              {tech}
              <StackIcon name={tech.toLowerCase()} className="project-card__tech-icon" />
            </span>
          ))}
        </div>
        <div className="project-card__buttons">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Demo
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

