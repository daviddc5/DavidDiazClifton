import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import NintendoSwitchPortfolio from "./components/NintendoSwitch/NintendoSwitchPortfolio";

import "./App.css";
// Import NieR Automata theme
import "./styles/NierAutomataTheme.css";
import "./styles/ThemeFixesStrong.css";

// Initialize theme from localStorage
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
};

// This component wraps the portfolio and checks the current path
const PortfolioWrapper = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = React.useState(false);

  // Check if this is the first visit in this session
  React.useEffect(() => {
    // Only show intro when on home page AND we haven't shown it yet this session
    const hasShownIntroThisSession = sessionStorage.getItem("hasShownIntro");

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
      <NintendoSwitchPortfolio></NintendoSwitchPortfolio>
    </>
  );
};

function App() {
  // Initialize theme when the app loads
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <PortfolioWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
