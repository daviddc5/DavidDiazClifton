import React, { useState } from "react";
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
import portfolioData from "../../data/portfolioData";
import "../../styles/NintendoSwitch.css";

const NintendoSwitchPortfolio = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isPressing, setIsPressing] = useState(false);

  // Get ordered sections array for navigation
  const orderedSections = portfolioData.sections;

  const handleSectionClick = (section) => {
    setIsPressing(true);
    // Add short delay to allow press animation to complete
    setTimeout(() => {
      setSelectedSection(section);
      setIsMenuOpen(false);
      setIsPressing(false);
    }, 300);
  };

  const handleHomeClick = () => {
    setSelectedSection(null);
    setIsMenuOpen(true);
  };

  // Handle navigation between sections
  const handleNavigation = (sectionId) => {
    const section = orderedSections.find((s) => s.id === sectionId);
    if (section) {
      setSelectedSection(section);
    }
  };

  const renderSectionContent = () => {
    if (!selectedSection) return null;
    switch (selectedSection.id) {
      case "profile":
        return <ProfileSection data={portfolioData.profile} />;
      case "education":
        return <EducationSection data={portfolioData.education} />;
      case "experience":
        return <ExperienceSection data={portfolioData.experience} />;
      case "skills":
        return <SkillsSection data={portfolioData.skills} />;
      case "projects":
        return <ProjectsSection data={portfolioData.projects} />;
      case "contact":
        return <ContactSection data={portfolioData.contact} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`nintendo-switch-portfolio ${isPressing ? "pressing" : ""}`}
    >
      <StatusBar />

      <div className="console-content">
        {isMenuOpen ? (
          <>
            <UserProfile
              name="David Diaz Clifton"
              title="Full Stack Developer"
              avatarSrc="/DavidDC.jpg"
            />

            {/* Wrap the sections in a scrollable container */}
            <div className="sections-container">
              <SectionGrid
                sections={portfolioData.sections}
                onSectionClick={handleSectionClick}
              />
            </div>
          </>
        ) : (
          <div
            className="section-view"
            style={{
              backgroundColor: selectedSection
                ? selectedSection.color + "15"
                : "",
            }}
          >
            {renderSectionContent()}
          </div>
        )}
      </div>

      <NavBar
        onHomeClick={handleHomeClick}
        selectedSection={selectedSection}
        portfolioData={portfolioData}
        onNavigate={handleNavigation}
      />
    </div>
  );
};

export default NintendoSwitchPortfolio;
