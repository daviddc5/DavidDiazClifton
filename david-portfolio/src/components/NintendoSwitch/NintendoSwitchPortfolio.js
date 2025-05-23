// Import the custom CSS file first
import "../../styles/NierEnhancedBorders.css";
import "../../styles/PrevNextNavigation.css"; // Import our new navigation styles

import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import StatusBar from "./StatusBar";
import UserProfile from "./UserProfile";
import SectionGrid from "./SectionGrid";
import NavBar from "./NavBar";
import ProfileSection from "./sections/ProfileSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import NierFooter from "./NierFooter"; // Import our footer component
import PrevNextNavigation from "./PrevNextNavigation"; // Import our new navigation component
import portfolioData from "../../data/portfolioData";
import "../../styles/NintendoSwitch.css";
import "../../styles/ResponsiveMenu.css"; // Import responsive menu styles

const NintendoSwitchPortfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPressing, setIsPressing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Determine current section based on path
  const currentPath = location.pathname;
  const sectionId = currentPath.replace("/", "");
  const selectedSection = sectionId
    ? portfolioData.sections.find((s) => s.id === sectionId)
    : null;

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setShowMobileMenu(width <= 768);
    };

    // Initial check
    checkMobile();

    // Add listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Track route changes to add transition effect
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match this with CSS animation duration

    return () => clearTimeout(timer);
  }, [currentPath]);

  const handleSectionClick = (section) => {
    setIsPressing(true);
    // Add short delay to allow press animation to complete
    setTimeout(() => {
      navigate(`/${section.id}`);
      setIsPressing(false);
    }, 300);
  };

  const handleHomeClick = () => {
    navigate("/profile"); // Changed from "/" to "/profile"
  };

  return (
    <div
      className={`nintendo-switch-portfolio ${isPressing ? "pressing" : ""}`}
      role="application"
      aria-label="NieR Automata-styled portfolio"
    >
      <NavBar
        onHomeClick={handleHomeClick}
        selectedSection={selectedSection}
        portfolioData={portfolioData}
        isMobile={isMobile}
        currentPath={currentPath}
      />

      <div className="console-content">
        <div className={`section-view ${isTransitioning ? "entering" : ""}`}>
          <Routes>
            <Route
              path="/"
              element={<ProfileSection data={portfolioData.profile} />}
            />
            <Route
              path="/profile"
              element={<ProfileSection data={portfolioData.profile} />}
            />
            <Route
              path="/education"
              element={<EducationSection data={portfolioData.education} />}
            />
            <Route
              path="/experience"
              element={<ExperienceSection data={portfolioData.experience} />}
            />
            <Route
              path="/skills"
              element={<SkillsSection data={portfolioData.skills} />}
            />
            <Route
              path="/projects"
              element={<ProjectsSection data={portfolioData.projects} />}
            />
            <Route
              path="/contact"
              element={<ContactSection data={portfolioData.contact} />}
            />
          </Routes>

          {/* Add the PrevNextNavigation component when a section is selected */}
          {selectedSection && (
            <PrevNextNavigation
              sections={portfolioData.sections}
              currentSectionId={selectedSection.id}
            />
          )}
        </div>
      </div>

      {/* Add the NieR-style footer */}
      <NierFooter />
    </div>
  );
};

export default NintendoSwitchPortfolio;
