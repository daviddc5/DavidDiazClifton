import React, { useState, useEffect } from "react";

const SectionGrid = ({ sections, onSectionClick }) => {
  const [pressedSection, setPressedSection] = useState(null);
  const [gridLayout, setGridLayout] = useState(3); // Default to 3 columns

  // Handle responsive grid layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setGridLayout(1); // 1 column on mobile
      } else if (window.innerWidth <= 900) {
        setGridLayout(2); // 2 columns on tablets
      } else {
        setGridLayout(3); // 3 columns on desktop
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSectionPress = (section) => {
    // Set the pressed section for visual feedback
    setPressedSection(section.id);

    // Add a small delay before navigation to allow the press animation to be visible
    setTimeout(() => {
      onSectionClick(section);
      setPressedSection(null);
    }, 300);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, section) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSectionPress(section);
    }
  };

  return (
    <div className="section-grid-container">
      <div
        className="section-grid"
        style={{
          gridTemplateColumns: `repeat(${gridLayout}, 1fr)`,
        }}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`section-tile ${
              pressedSection === section.id ? "pressed" : ""
            }`}
            style={{
              backgroundColor: section.color,
              // Add dynamic height based on grid layout
              height:
                gridLayout === 1
                  ? "120px"
                  : gridLayout === 2
                  ? "140px"
                  : "160px",
            }}
            onClick={() => handleSectionPress(section)}
            onKeyDown={(e) => handleKeyDown(e, section)}
            tabIndex={0}
            role="button"
            aria-label={`View ${section.title} section`}
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
