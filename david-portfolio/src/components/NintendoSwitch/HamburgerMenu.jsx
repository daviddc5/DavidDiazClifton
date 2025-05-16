import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * HamburgerMenu Component
 * Provides a mobile-friendly navigation menu that toggles between a hamburger icon
 * and a full-screen menu overlay with navigation links.
 */
const HamburgerMenu = ({ sections, currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a navigation item is clicked
  const handleNavigate = (section) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(section);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="hamburger-menu-container" ref={menuRef}>
      {/* Hamburger Icon Button */}
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          <h2 className="nier-heading" data-text="NAVIGATION">
            NAVIGATION
          </h2>
          <ul className="menu-links">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={`/${section.id}`}
                  className={`menu-link ${
                    currentPath === `/${section.id}` ? "active" : ""
                  }`}
                  onClick={() => handleNavigate(section)}
                  style={{
                    color:
                      currentPath === `/${section.id}` ? section.color : "",
                  }}
                >
                  <div
                    className="menu-icon"
                    style={{
                      backgroundColor:
                        currentPath === `/${section.id}`
                          ? section.color + "40"
                          : "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {section.icon}
                  </div>
                  <span className="menu-text">{section.title}</span>
                </Link>
              </li>
            ))}
            {/* Changed Home link to point to profile */}
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
