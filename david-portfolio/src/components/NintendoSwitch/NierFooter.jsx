import React from "react";

/**
 * NierFooter - Adds NieR: Automata UI style decorative footer elements
 * These elements are purely decorative and enhance the visual style
 */
const NierFooter = () => {
  return (
    <>
      {/* Pixel blocks in corners */}
      <div className="nier-pixel-block bottom-left"></div>
      <div className="nier-pixel-block bottom-right"></div>

      {/* Footer decoration with data blocks and lines */}
      <div className="nier-footer-decoration">
        <div className="nier-data-line"></div>
        <div className="nier-data-block"></div>
        <div className="nier-data-block"></div>
        <div className="nier-data-line"></div>
      </div>
    </>
  );
};

export default NierFooter;
