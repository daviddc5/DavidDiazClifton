import React, { useState } from "react";
import StatusBar from "./StatusBar";
import UserProfile from "./UserProfile";
import SectionGrid from "./SectionGrid";
import NavBar from "./NavBar";
import ProfileSection from "./ProfileSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import portfolioData from "../data/portfolioData";
// import {useMediaQuery} from 'react-responsive';
import "../styles/NintendoSwitch.css";

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
      case "Profile":
        return <ProfileSection data={portfolioData.profile} />;
      case "Education":
        return <EducationSection data={portfolioData.education} />;
      case "Experience":
        return <ExperienceSection data={portfolioData.experience} />;
      case "Skills":
        return <SkillsSection data={portfolioData.skills} />;
      case "Projects":
        return <ProjectsSection data={portfolioData.projects} />;
      case "Contact":
        return <ContactSection data={portfolioData.contact} />;
      default:
        return null;
    }
  };
  return (
    <div className="nintendo-switch-portfolio">
      <StatusBar />

      <div className="console-content">
        {isMenuOpen && (
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
        )}
        : (
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
        )
        <NavBar
          onHomeClick={handleHomeClick}
          selectedSection={selectedSection}
        />
      </div>
    </div>
  );
};
export default NintendoSwitchPortfolio;
