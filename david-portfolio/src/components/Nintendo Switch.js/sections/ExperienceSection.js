import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

const ExperienceSection = ({ data }) => {
  return (
    <div className="section-content experience-section">
      <SectionHeader title="Experience" />

      <div className="experience-cards">
        {data.jobs.map((job, index) => (
          <Card
            key={index}
            className="experience-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="job-header">
              <h3>{job.company}</h3>
              <span className="job-period">{job.period}</span>
            </div>
            <p className="job-role">{job.role}</p>
            <p className="job-tech">{job.techStack}</p>
            <ul className="job-bullets">
              {job.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
