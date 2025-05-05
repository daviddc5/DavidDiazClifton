import React, { useState, useEffect, useRef } from "react";

const SectionCarousel = ({ sections, onSectionClick }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const carouselTrackRef = useRef(null);
  const carouselWrapperRef = useRef(null);

  // Calculate items per page based on screen width and container width
  useEffect(() => {
    const handleResize = () => {
      // Set a default value
      let itemsPerView = 4;

      // Calculate based on screen width
      if (window.innerWidth >= 1200) {
        itemsPerView = 4;
      } else if (window.innerWidth >= 768) {
        itemsPerView = 3;
      } else if (window.innerWidth >= 480) {
        itemsPerView = 2;
      } else {
        itemsPerView = 1;
      }

      setItemsPerPage(itemsPerView);

      // Ensure current page is still valid with new number of items per page
      const newTotalPages = Math.ceil(sections.length / itemsPerView);
      setTotalPages(newTotalPages);

      if (currentPage >= newTotalPages) {
        setCurrentPage(Math.max(0, newTotalPages - 1));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sections.length, currentPage]);

  // Update carousel position when page changes
  useEffect(() => {
    if (carouselTrackRef.current && carouselWrapperRef.current) {
      const itemWidth = carouselWrapperRef.current.clientWidth / itemsPerPage;
      const translateX = currentPage * itemsPerPage * itemWidth;
      carouselTrackRef.current.style.transform = `translateX(-${translateX}px)`;
    }
  }, [currentPage, itemsPerPage]);

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="section-carousel">
      <div className="carousel-container">
        <button
          className="carousel-arrow left"
          onClick={handlePrevClick}
          disabled={currentPage === 0}
          style={{ opacity: currentPage === 0 ? 0.5 : 1 }}
        >
          &#10094;
        </button>

        <div className="carousel-wrapper" ref={carouselWrapperRef}>
          <div className="carousel-track" ref={carouselTrackRef}>
            {sections.map((section) => (
              <div
                key={section.id}
                className="carousel-item"
                style={{ backgroundColor: section.color }}
                onClick={() => onSectionClick(section)}
              >
                <div className="tile-icon">{section.icon}</div>
                <div className="tile-title">{section.title}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow right"
          onClick={handleNextClick}
          disabled={currentPage >= totalPages - 1}
          style={{ opacity: currentPage >= totalPages - 1 ? 0.5 : 1 }}
        >
          &#10095;
        </button>
      </div>

      {totalPages > 1 && (
        <div className="carousel-dots">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${
                currentPage === index ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionCarousel;
