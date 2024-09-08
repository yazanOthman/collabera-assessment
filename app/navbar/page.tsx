"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Showcase",
    "Docs",
    "Blog",
    "Analytics",
    "Templates",
    "Enterprise",
  ];
  return (
    <nav className="navbar">
      <div className="desktop-nav">
        <div className="nav-items">
          <a href="/" className="logo">
            AEON
          </a>
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search documentation..."
            className="search-input"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          <span className="logo">AEON</span>
          {isOpen && <span className="search-icon">🔍</span>}
          <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
        {isOpen && (
          <div className="mobile-menu">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
