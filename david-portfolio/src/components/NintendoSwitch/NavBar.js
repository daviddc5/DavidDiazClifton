import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../../styles/themeToggle"; // Import the ThemeToggle component

// Light gray color for navbar text
const NAVBAR_TEXT_COLOR = "#d8d8d8";

const NavBar = ({
  onHomeClick,
  selectedSection,
  portfolioData,
  isMobile = false,
  currentPath,
}) => {
  const navRef = useRef(null);
  const activeButtonRef = useRef(null);
  const location = useLocation();

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
  }, [selectedSection, location]);

  // Find the middle index of the sections array
  const getMiddleIndex = () => {
    if (!portfolioData || !portfolioData.sections) return -1;
    return Math.floor(portfolioData.sections.length / 2);
  };

  // Get the sections before and after the home button
  const getFirstHalfSections = () => {
    if (!portfolioData || !portfolioData.sections) return [];
    return portfolioData.sections.slice(0, getMiddleIndex());
  };

  const getSecondHalfSections = () => {
    if (!portfolioData || !portfolioData.sections) return [];
    return portfolioData.sections.slice(getMiddleIndex());
  };

  return (
    <div className="nav-bar">
      {/* Left placeholder for balance */}
      <div className="nav-placeholder">
        {selectedSection && (
          <div className="section-indicator" aria-hidden="true">
            <div
              className="indicator-color"
              style={{ backgroundColor: selectedSection.color }}
            ></div>
            <span style={{ color: NAVBAR_TEXT_COLOR }}>
              {selectedSection.title}
            </span>
          </div>
        )}
      </div>

      {/* Centered navigation */}
      <div className="navbar-center">
        {selectedSection ? (
          <div
            className="navbar-navigation-container"
            ref={navRef}
            role="navigation"
            aria-label="Section navigation"
          >
            {/* First half of sections */}
            <div className="navbar-navigation-half">
              {getFirstHalfSections().map((section) => (
                <Link
                  key={section.id}
                  to={`/${section.id}`}
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
                  style={{
                    color: NAVBAR_TEXT_COLOR,
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
                </Link>
              ))}
            </div>

            {/* Home button in the middle */}
            <Link to="/" className="home-button" aria-label="Home">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={NAVBAR_TEXT_COLOR}
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </Link>

            {/* Second half of sections */}
            <div className="navbar-navigation-half">
              {getSecondHalfSections().map((section) => (
                <Link
                  key={section.id}
                  to={`/${section.id}`}
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
                  style={{
                    color: NAVBAR_TEXT_COLOR,
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
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link to="/" className="home-button" aria-label="Home">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={NAVBAR_TEXT_COLOR}
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
        )}
      </div>

      {/* Right placeholder for theme toggle */}
      <div className="nav-placeholder">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
