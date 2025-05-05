import React from "react";

const SectionTile = ({ section, onClick }) => {
  return (
    <div
      className="section-tile"
      style={{ backgroundColor: section.color }}
      onClick={() => onClick(section)}
    >
      <div className="tile-icon">{section.icon}</div>
      <span className="tile-title">{section.title}</span>
    </div>
  );
};

export default SectionTile;
