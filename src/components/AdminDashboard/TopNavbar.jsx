// TopNavbar.js
import React from "react";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="left-section">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="right-section">
        <i className="fas fa-bell"></i>
        <i className="fas fa-envelope"></i>
        <i className="fas fa-address-book"></i>
      </div>
    </div>
  );
};

export default TopNavbar;
