import FadeInSection from "./FadeInSection";
import CarouselProjects from "./CarouselProjects";
import ProjectCard from "./ProjectCard";
import "../../styles/ProjectSection.sass"; // Assuming you have a CSS file for styles
import {projects}  from "../../data/projects.ts"; // Adjust the import path as necessary

export default function ProjectSection() {
  return (
    <FadeInSection id="project-section">
      <div className="section-container">
        <div className="projects-container">
          <h2 className="projects__title">My Projects</h2>
          <p className="projects__description">
            Here are some of the projects I've worked on. Click on the cards to
            learn more about each project.
          </p>
          <CarouselProjects>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                techStack={project.techStack}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
              />
            ))}
          </CarouselProjects>
        </div>
      </div>
    </FadeInSection>
  );
}
