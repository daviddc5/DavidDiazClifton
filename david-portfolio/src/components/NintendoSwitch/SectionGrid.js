import React from "react";

const SectionGrid = ({ sections, onSectionClick }) => {
  return (
    <div className="section-grid-container">
      <div className="section-grid">
        {sections.map((section) => (
          <div
            key={section.id}
            className="section-tile"
            style={{ backgroundColor: section.color }}
            onClick={() => onSectionClick(section)}
          >
            <div className="tile-icon">{section.icon}</div>
            <div className="tile-title">{section.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionGrid;
