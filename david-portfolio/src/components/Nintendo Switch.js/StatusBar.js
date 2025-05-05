import React, { useState, useEffect } from "react";

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(1);

  // Time updater
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time for header
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="status-bar">
      <span className="time">{formatTime(currentTime)}</span>
      <div className="status-icons">
        <span className="wifi-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <circle cx="12" cy="20" r="1" />
          </svg>
        </span>
        <span className="battery">
          <div className="battery-icon">
            <div
              className="battery-level"
              style={{ width: `${batteryLevel}%` }}
            ></div>
          </div>
          {batteryLevel}%
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
