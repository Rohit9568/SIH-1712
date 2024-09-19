// VrPopup.jsx
import React, { useState, useEffect } from 'react';

const VrPopup = ({ onClose, onDeviceConnected }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate device connection delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      onDeviceConnected(); // Call the success handler
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup timer
  }, [onDeviceConnected]);

  return (
    <div className="vr-popup-overlay">
      <div className="vr-popup-content">
        {isLoading ? (
          <div className="vr-popup-loading">
            <p>Please connect your VR Device</p>
            <div className="loader"></div>
          </div>
        ) : (
          <div className="vr-popup-success">
            <p>Device Connected Successfully</p>
          </div>
        )}
        <button className="vr-popup-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default VrPopup;
