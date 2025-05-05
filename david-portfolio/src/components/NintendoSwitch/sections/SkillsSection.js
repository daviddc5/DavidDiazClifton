import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

const SkillsSection = ({ data }) => {
  return (
    <div className="section-content skills-section">
      <SectionHeader title="Skills & Interests" />

      <div className="skills-container">
        <Card className="skill-category">
          <h3>Technical Skills</h3>
          <ul className="skill-list">
            {data.technical.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="skill-category">
          <h3>Languages</h3>
          <ul className="skill-list">
            {data.languages.map((language, index) => (
              <li key={index} className="skill-item">
                {language}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="skill-category">
          <h3>Interests</h3>
          <ul className="skill-list">
            {data.interests.map((interest, index) => (
              <li key={index} className="skill-item">
                {interest}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default SkillsSection;
