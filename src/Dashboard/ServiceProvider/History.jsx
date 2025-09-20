import React from "react";
import { FaTachometerAlt, FaUser, FaHistory, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function History() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#29289f",
          minHeight: "100vh",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h5 className="mb-4">Menu</h5>
        {/* <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>CityAssist</h3> */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
              <FaTachometerAlt style={{ marginRight: "10px" }} />
              Dashboard
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/requests" style={{ color: "#fff", textDecoration: "none" }}>
              <FaUser style={{ marginRight: "10px" }} />
              Requests
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/history" style={{ color: "#fff", textDecoration: "none" }}>
              <FaHistory style={{ marginRight: "10px" }} />
              History
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/settings" style={{ color: "#fff", textDecoration: "none" }}>
              <FaCog style={{ marginRight: "10px" }} />
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        {/* Top Navbar */}
        <nav
          style={{
            backgroundColor: "#29289f",
            color: "#fff",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <Link
            to="/profile"
            style={{
              color: "#fff",
              textDecoration: "none",
              marginRight: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaUser style={{ marginRight: "5px" }} /> Profile
          </Link>
          <Link
            to="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaSignOutAlt style={{ marginRight: "5px" }} /> Logout
          </Link>
        </nav>

        {/* Page Content */}
        <div style={{ padding: "20px" }}>
         <h3 style={{ color: "#29289f" }}>History</h3>
      <p>Completed and past service requests will appear here.</p>
        </div>
      </div>
    </div>
  );
}

export default History;
