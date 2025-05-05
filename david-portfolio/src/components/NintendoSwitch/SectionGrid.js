import React from "react";
import SectionTile from "./SectionTile";

const SectionGrid = ({ sections, onSectionClick }) => {
  return (
    <div className="section-grid">
      {sections.map((section) => (
        <SectionTile
          key={section.id}
          section={section}
          onClick={onSectionClick}
        />
      ))}
    </div>
  );
};

export default SectionGrid;
