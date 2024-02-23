import React from "react";
import "../styles/AdminDashboard.css";
import LeftNavbar from "../components/AdminDashboard/LeftNavbar";
import TopNavbar from "../components/AdminDashboard/TopNavbar";
import Dashboard from "../components/AdminDashboard/Dashboard";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <LeftNavbar />
      <div className="content">
        <TopNavbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default AdminDashboard;
