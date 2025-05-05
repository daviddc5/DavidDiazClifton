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

  // Get ordered sections array for navigation
  const orderedSections = portfolioData.sections;

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setIsMenuOpen(false);
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
    <div className="nintendo-switch-portfolio">
      <StatusBar />

      <div className="console-content">
        {isMenuOpen ? (
          <>
            <UserProfile
              name="David Diaz Clifton"
              title="Full Stack Developer"
              avatarSrc="/DavidDC.jpg"
            />
            <SectionGrid
              sections={portfolioData.sections}
              onSectionClick={handleSectionClick}
            />
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

            {/* Nintendo Style Navigation */}
            <div className="switch-navigation">
              {orderedSections.map((section) => (
                <button
                  key={section.id}
                  className={`switch-nav-button ${
                    selectedSection && selectedSection.id === section.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleNavigation(section.id)}
                  style={{
                    color: section.color,
                  }}
                >
                  <div
                    className="switch-nav-icon"
                    style={{
                      backgroundColor:
                        selectedSection && selectedSection.id === section.id
                          ? section.color + "40"
                          : "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {section.icon}
                  </div>
                  <span className="switch-nav-text">{section.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <NavBar onHomeClick={handleHomeClick} selectedSection={selectedSection} />
    </div>
  );
};

export default NintendoSwitchPortfolio;
