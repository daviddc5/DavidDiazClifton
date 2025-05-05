import React from "react";

const NavBar = ({
  onHomeClick,
  selectedSection,
  portfolioData,
  onNavigate,
}) => {
  return (
    <div className="nav-bar">
      <button className="home-button" onClick={onHomeClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>

      {/* Section Navigation in NavBar */}
      {selectedSection && (
        <div className="navbar-navigation">
          {portfolioData.sections.map((section) => (
            <button
              key={section.id}
              className={`navbar-nav-button ${
                selectedSection && selectedSection.id === section.id
                  ? "active"
                  : ""
              }`}
              onClick={() => onNavigate(section.id)}
              style={{
                color: section.color,
              }}
            >
              <div
                className="navbar-nav-icon"
                style={{
                  backgroundColor:
                    selectedSection && selectedSection.id === section.id
                      ? section.color + "40"
                      : "rgba(255, 255, 255, 0.2)",
                }}
              >
                {section.icon}
              </div>
              <span className="navbar-nav-text">{section.title}</span>
            </button>
          ))}
        </div>
      )}

      {selectedSection && (
        <div className="section-indicator">
          <div
            className="indicator-color"
            style={{ backgroundColor: selectedSection.color }}
          ></div>
          <span>{selectedSection.title}</span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
