import React from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

const ProjectsSection = () => {
  return (
    <div className="section-content projects-section">
      <SectionHeader title="Projects" />

      <div className="github-showcase">
        <Card className="github-showcase-card">
          <div className="github-showcase-content">
            <div className="github-showcase-icon">
              <Github size={56} />
            </div>
            <h2 className="github-showcase-title">My Projects on GitHub</h2>
            <a
              href="https://github.com/daviddc5"
              target="_blank"
              rel="noopener noreferrer"
              className="github-showcase-btn"
            >
              <Github size={18} />
              <span>github.com/daviddc5</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="github-stats">
            <div className="github-stat-item">
              <Star size={16} />
              <span>Open Source</span>
            </div>
            <div className="github-stat-item">
              <GitFork size={16} />
              <span>Active Projects</span>
            </div>
            <div className="github-stat-item">
              <Github size={16} />
              <span>daviddc5</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsSection;
