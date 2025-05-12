import React, { useState, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import NintendoSwitchPortfolio from "./components/NintendoSwitch/NintendoSwitchPortfolio";
import IntroAnimation from "./components/IntroAnimation";
import "./App.css";

// This component wraps the portfolio and checks the current path
const PortfolioWrapper = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Create a session storage variable to track if we've shown the intro
    const hasShownIntroThisSession = sessionStorage.getItem("hasShownIntro");

    // Only show intro when on home page AND we haven't shown it yet this session
    if (
      (location.pathname === "/" || location.pathname === "") &&
      !hasShownIntroThisSession
    ) {
      setShowIntro(true);
      // Mark that we've shown the intro this session
      sessionStorage.setItem("hasShownIntro", "true");
    }
  }, [location.pathname]);

  const handleEnterPortfolio = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <IntroAnimation onEnter={handleEnterPortfolio} />
      ) : (
        <NintendoSwitchPortfolio />
      )}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PortfolioWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
