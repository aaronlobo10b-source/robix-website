import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NeonSidebar.css";

const NeonSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="neon-sidebar">
      {/* ☰ Hamburger Icon */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`menu ${open ? "open" : ""}`}>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Events
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/sponsors"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Sponsors
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Team
        </NavLink>
      </div>
    </div>
  );
};

export default NeonSidebar;
