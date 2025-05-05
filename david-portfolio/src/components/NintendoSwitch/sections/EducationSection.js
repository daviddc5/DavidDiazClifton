import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

const EducationSection = ({ data }) => {
  return (
    <div className="section-content education-section">
      <SectionHeader title="Education" />

      <div className="education-cards">
        {data.schools.map((school, index) => (
          <Card
            key={index}
            className="education-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="school-header">
              <h3>{school.institution}</h3>
              <span className="school-period">{school.period}</span>
            </div>
            <p className="school-degree">{school.degree}</p>
            {school.grade && <p className="school-grade">{school.grade}</p>}
            {school.details && (
              <ul className="school-details">
                {school.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
