import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../../styles/themeToggle"; // Import the ThemeToggle component
import HamburgerMenu from "./HamburgerMenu"; // Import our new hamburger menu component

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Determine if we're on the profile page (now the main page)
  const isOnProfile = currentPath === "/profile" || currentPath === "/";

  // Check screen size for responsive menu
  useEffect(() => {
    const checkScreenSize = () => {
      setShowMobileMenu(window.innerWidth <= 768); // Show mobile menu on screens <= 768px
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Scroll to active button when section changes
  useEffect(() => {
    if (
      selectedSection &&
      navRef.current &&
      activeButtonRef.current &&
      !showMobileMenu
    ) {
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
  }, [selectedSection, location, showMobileMenu]);

  // Handle navigation through hamburger menu
  const handleMobileNavigation = (section) => {
    if (section) {
      // Navigate to a specific section
      if (onHomeClick) {
        onHomeClick();
      }
    } else {
      // Navigate to profile page (home)
      if (onHomeClick) {
        onHomeClick();
      }
    }
  };

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
        {selectedSection && !showMobileMenu && (
          <div className="section-indicator" aria-hidden="true">
            <div
              className="indicator-color"
              style={{ backgroundColor: selectedSection.color }}
            ></div>
            <span>{selectedSection.title}</span>
          </div>
        )}

        {/* Show hamburger menu on mobile */}
        {showMobileMenu && (
          <HamburgerMenu
            sections={portfolioData.sections}
            currentPath={currentPath}
            onNavigate={handleMobileNavigation}
          />
        )}
      </div>

      {/* Centered navigation - Only shown on desktop */}
      {!showMobileMenu && (
        <div className="navbar-center">
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
                    color:
                      selectedSection && selectedSection.id === section.id
                        ? "white"
                        : undefined,
                    backgroundColor:
                      selectedSection && selectedSection.id === section.id
                        ? section.color
                        : undefined,
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

            {/* Home button in the middle - Modified to always show and point to profile */}
            {/* <Link to="/profile" className="home-button" aria-label="Home">
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
            </Link> */}

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
                    color:
                      selectedSection && selectedSection.id === section.id
                        ? "white"
                        : undefined,
                    backgroundColor:
                      selectedSection && selectedSection.id === section.id
                        ? section.color
                        : undefined,
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
        </div>
      )}

      {/* Right placeholder for theme toggle */}
      <div className="nav-placeholder">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
