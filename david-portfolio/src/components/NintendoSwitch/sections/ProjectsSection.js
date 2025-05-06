import React from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

const ProjectsSection = ({ data }) => {
  return (
    <div className="section-content projects-section">
      <SectionHeader title="Projects" />

      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <Card
            key={index}
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
