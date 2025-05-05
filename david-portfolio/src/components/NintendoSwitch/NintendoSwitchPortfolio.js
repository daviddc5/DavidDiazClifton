import React, { useState } from "react";
import StatusBar from "./StatusBar";
import UserProfile from "./UserProfile";
import SectionGrid from "./SectionGrid";
import NavBar from "./NavBar";
import ProfileSection from "./sections/ProfileSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
// import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import portfolioData from "../../data/portfolioData";
import "../../styles/NintendoSwitch.css";

const NintendoSwitchPortfolio = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    setSelectedSection(null);
    setIsMenuOpen(true);
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
          </div>
        )}
      </div>

      <NavBar onHomeClick={handleHomeClick} selectedSection={selectedSection} />
    </div>
  );
};

export default NintendoSwitchPortfolio;
