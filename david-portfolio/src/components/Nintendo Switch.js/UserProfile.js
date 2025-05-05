import React from "react";

const UserProfile = ({ name, title, avatarSrc }) => {
  return (
    <div className="user-profile">
      <div className="avatar-container">
        <img src={avatarSrc} alt={name} className="avatar" />
      </div>
      <div className="user-info">
        <h1 className="user-name">{name}</h1>
        <h3 className="user-title">{title}</h3>
      </div>
    </div>
  );
};

export default UserProfile;
