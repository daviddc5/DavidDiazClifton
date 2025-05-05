import React, { useRef, useEffect } from "react";

const NavBar = ({
  onHomeClick,
  selectedSection,
  portfolioData,
  onNavigate,
  isMobile = false,
}) => {
  const navRef = useRef(null);
  const activeButtonRef = useRef(null);

  // Scroll to active button when section changes
  useEffect(() => {
    if (selectedSection && navRef.current && activeButtonRef.current) {
      const container = navRef.current;
      const activeButton = activeButtonRef.current;

      // Calculate position to scroll to
      const scrollLeft =
        activeButton.offsetLeft -
        container.offsetWidth / 2 +
        activeButton.offsetWidth / 2;

      // Smooth scroll to the active button
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [selectedSection]);

  return (
    <div className="nav-bar">
      <button className="home-button" onClick={onHomeClick} aria-label="Home">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>

      {/* Section Navigation in NavBar */}
      {selectedSection && (
        <div
          className="navbar-navigation"
          ref={navRef}
          role="navigation"
          aria-label="Section navigation"
        >
          {portfolioData.sections.map((section) => (
            <button
              key={section.id}
              ref={
                selectedSection && selectedSection.id === section.id
                  ? activeButtonRef
                  : null
              }
              className={`navbar-nav-button ${
                selectedSection && selectedSection.id === section.id
                  ? "active"
                  : ""
              }`}
              onClick={() => onNavigate(section.id)}
              style={{
                color: section.color,
              }}
              aria-label={`Go to ${section.title}`}
              aria-current={
                selectedSection && selectedSection.id === section.id
                  ? "page"
                  : undefined
              }
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

      {selectedSection && !isMobile && (
        <div className="section-indicator" aria-hidden="true">
          <div
            className="indicator-color"
            style={{ backgroundColor: selectedSection.color }}
          ></div>
          <span>{selectedSection.title}</span>
        </div>
      )}

      {/* Mobile control indicators */}
      {isMobile && (
        <div className="controls">
          <span className="control-btn">A</span>
          <span className="control-text">Select</span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
