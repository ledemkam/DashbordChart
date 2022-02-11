import React from "react";
import iconDashboard from "./analytics.svg";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidenav">
      <img src={iconDashboard} alt="" />
      <Link to="/">FINANZ</Link>
      <Link to="/dashboardEmployees">ARBEITSPLATZ</Link>
    </nav>
  );
}
