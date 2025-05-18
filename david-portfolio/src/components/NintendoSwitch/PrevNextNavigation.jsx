import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * PrevNextNavigation Component
 * Provides navigation to previous and next sections in the portfolio
 * Displays the name of the destination section
 * Responsive for mobile and desktop
 */
const PrevNextNavigation = ({ sections, currentSectionId }) => {
  // Find the current section index
  const currentIndex = sections.findIndex(
    (section) => section.id === currentSectionId
  );

  // Determine previous and next sections
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div className="prev-next-navigation">
      {prevSection ? (
        <Link
          to={`/${prevSection.id}`}
          className="nav-button prev-button"
          aria-label={`Go to ${prevSection.title} section`}
        >
          <ArrowLeft size={20} />
          <div className="nav-button-content">
            <span className="nav-direction">Previous</span>
            <span className="nav-page-name">{prevSection.title}</span>
          </div>
        </Link>
      ) : (
        <div className="nav-button-placeholder"></div>
      )}

      {nextSection ? (
        <Link
          to={`/${nextSection.id}`}
          className="nav-button next-button"
          aria-label={`Go to ${nextSection.title} section`}
        >
          <div className="nav-button-content">
            <span className="nav-direction">Next</span>
            <span className="nav-page-name">{nextSection.title}</span>
          </div>
          <ArrowRight size={20} />
        </Link>
      ) : (
        <div className="nav-button-placeholder"></div>
      )}
    </div>
  );
};

export default PrevNextNavigation;
