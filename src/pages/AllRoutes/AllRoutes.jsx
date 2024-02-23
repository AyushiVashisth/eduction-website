import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Admission from "../Admission";
import Faculty from "../Faculty";
import OurCampus from "../OurCampus";
import ContactUs from "../ContactUs";
import Login from "../Login";
import AdminDashboard from "../AdminDashboard";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/our-campus" element={<OurCampus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};
export default Allroutes;
