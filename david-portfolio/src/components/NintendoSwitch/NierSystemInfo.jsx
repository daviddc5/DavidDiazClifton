import React, { useState, useEffect } from "react";

/**
 * NierSystemInfo - Adds a NieR: Automata UI style system info panel
 * This component displays system information in the style of NieR: Automata's UI
 */
const NierSystemInfo = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format date string in NieR style
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  // Format time string in NieR style
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="nier-os-info">
      <div className="nier-os-line">SYSTEM VER. 1.05_RE</div>
      <div className="nier-os-line">MODEL: YoRHa-D</div>
      <div className="nier-os-line">DATE: {formatDate(currentTime)}</div>
      <div className="nier-os-line">TIME: {formatTime(currentTime)}</div>
      <div className="nier-os-line">STATUS: OPERATIONAL</div>
    </div>
  );
};

export default NierSystemInfo;
