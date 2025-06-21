import React from "react";
import "./App.css";

const TopSection = () => {
  return (
    <div className="top-section">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo-icon">🚀</div>
          <div className="logo-text">
            <h1 className="app-name">PitchPilot</h1>
            <p className="tagline">Turn Any Company Into a Customer – In Seconds</p>
          </div>
        </div>

        <div className="navbar-center">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link">Login</a>
        </div>

        <div className="step-indicator">
          <span className="step active"></span>
          <span className="step"></span>
          <span className="step"></span>
        </div>

        <div className="navbar-right">
          <a href="#" className="demo-link">MVP Demo</a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header-section">
        <h2>Find Your Target Companies</h2>
        <p>Search and filter companies to create personalized outreach</p>
      </header>

      {/* Filter Bar */}
      <div className="filter-bar">
        <input type="text" placeholder="Search companies..." />
        <select>
          <option>All Locations</option>
          <option>San Francisco</option>
          <option>New York</option>
          <option>Austin</option>
        </select>
        <select>
          <option>All Industries</option>
          <option>FinTech</option>
          <option>HealthTech</option>
          <option>EdTech</option>
        </select>
      </div>
    </div>
  );
};

export default TopSection;
