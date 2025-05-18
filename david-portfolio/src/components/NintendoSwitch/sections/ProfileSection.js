import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

const ProfileSection = ({ data }) => {
  // Split the text by newline characters and map each paragraph to a <p> element
  const paragraphs = data.text.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph.trim()}
    </p>
  ));

  return (
    <div className="section-content profile-section">
      <SectionHeader title="Profile" />
      <Card>
        <div className="profile-content">
          <div className="profile-text">{paragraphs}</div>
          <div className="profile-images">
            <img
              src="/DavidDC.jpg"
              alt="David Diaz Clifton"
              className="profile-image"
            />
            <img src="/Jenga.jpg" alt="Jenga" className="profile-image" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileSection;
