import React, { useState } from "react";
import NintendoSwitchPortfolio from "./components/NintendoSwitch/NintendoSwitchPortfolio.js";
import IntroAnimation from "./components/IntroAnimation";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleEnterPortfolio = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      {showIntro ? (
        <IntroAnimation onEnter={handleEnterPortfolio} />
      ) : (
        <NintendoSwitchPortfolio />
      )}
    </div>
  );
}

export default App;
