import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import Card from "../../shared/Card";

const ProfileSection = ({ data }) => {
  return (
    <div className="section-content profile-section">
      <SectionHeader title="Profile" />
      <Card>
        <p>{data.text}</p>
      </Card>
    </div>
  );
};

export default ProfileSection;
