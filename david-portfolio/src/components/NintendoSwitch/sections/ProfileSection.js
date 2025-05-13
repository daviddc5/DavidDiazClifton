import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

const ProfileSection = ({ data }) => {
  return (
    <div className="section-content profile-section">
      <SectionHeader title="Profile" />
      <Card>
        <div className="profile-content">
          <p>{data.text}</p>
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
