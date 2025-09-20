// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// Import pages
import Home from "./Components/Home";
import ProviderSignUp from "./Components/ProviderSignUp";
import ProviderSignIn from "./Components/ProviderSignIn";
import SeekerSignUp from "./Components/SeekerSignUp";
import SeekerSignIn from "./Components/SeekerSignIn";
import Userservices from "./Dashboard/ServiceSeeker/UserServices";
import Userprofile from "./Dashboard/ServiceSeeker/Userprofile";
import Dashboard from "./Dashboard/ServiceProvider/Dashboard";
import Requests from "./Dashboard/ServiceProvider/Requests";
import History from "./Dashboard/ServiceProvider/History";
import Settings from "./Dashboard/ServiceProvider/Settings";
import Profile from "./Dashboard/ServiceProvider/Profile";


// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#29289f" }}>
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            CityAssist
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<ProviderSignUp />} />
        <Route path="/provider-signin" element={<ProviderSignIn />} />
        <Route path="/seekersignup" element={<SeekerSignUp />} />
        <Route path="/seekersignin" element={<SeekerSignIn />} />
      <Route path="/Userservices" element={<Userservices />} />
      <Route path="/Userprofile" element={<Userprofile />} />
        {/* Nested Routes for Dashboard */}
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="requests" element={<Requests />} />
          <Route path="history" element={<History />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
