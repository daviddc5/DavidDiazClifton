import React from "react";

const NavBar = ({ onHomeClick, selectedSection }) => {
  return (
    <div className="nav-bar">
      <button className="home-button" onClick={onHomeClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>

      {selectedSection && (
        <div className="section-indicator">
          <div
            className="indicator-color"
            style={{ backgroundColor: selectedSection.color }}
          ></div>
          <span>{selectedSection.title}</span>
        </div>
      )}

      {/* <div className="controls">
        <span className="control-btn">A</span>
        <span className="control-text">Select</span>
        <span className="control-btn">B</span>
        <span className="control-text">Back</span>
      </div> */}
    </div>
  );
};

export default NavBar;
