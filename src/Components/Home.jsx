// src/Components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#29289f", minHeight: "60vh" }}
      >
        <h1 className="fw-bold display-4">Our City, Our Services</h1>
        <p className="lead">
          Connecting citizens and service providers with transparency & trust
        </p>
        
      </header>

      {/* Cards Section */}
      <section id="register" className="container py-5">
        <div className="row justify-content-center g-4">
          {/* Provider */}
          <div className="col-md-5">
            <div
              className="card text-center border-0 shadow-lg rounded-4 h-100 p-4"
              style={{ backgroundColor: "#29289f" }}
            >
              <div className="fs-1 mb-3 text-white">🛠️</div>
              <h3 className="text-white">Service Provider</h3>
              <p className="text-light">
                Register as a provider to offer trusted local services, manage
                jobs, and grow your earnings.
              </p>
              <Link to="/provider" className="btn btn-outline-light mt-2">
                Register Provider
              </Link>
            </div>
          </div>

          {/* Seeker */}
          <div className="col-md-5">
            <div
              className="card text-center border-0 shadow-lg rounded-4 h-100 p-4"
              style={{ backgroundColor: "#29289f" }}
            >
              <div className="fs-1 mb-3 text-white">🙋</div>
              <h3 className="text-white">Service Seeker</h3>
              <p className="text-light">
                Sign up as a citizen to find verified providers and request services.
              </p>
              <Link to="/seekersignin" className="btn btn-outline-light mt-2">
                Register Seeker
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: "#29289f" }}>
            About CityAssist
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="card border-0 shadow rounded-4 p-4 h-100"
                style={{ backgroundColor: "#29289f" }}
              >
                <h4 className="text-white">Our Mission</h4>
                <p className="text-light">
                  To make local services transparent, accessible, and eco-friendly while empowering workers in smart cities.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card border-0 shadow rounded-4 p-4 h-100"
                style={{ backgroundColor: "#29289f" }}
              >
                <h4 className="text-white">Our Vision</h4>
                <p className="text-light">
                  A sustainable smart city where citizens and providers connect seamlessly through technology.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card border-0 shadow rounded-4 p-4 h-100"
                style={{ backgroundColor: "#29289f" }}
              >
                <h4 className="text-white">Our Values</h4>
                <p className="text-light">
                  Fair pricing, worker empowerment, eco-conscious practices, and trust within the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: "#29289f" }}>
            Why Choose CityAssist?
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group list-group-flush text-start">
                <li className="list-group-item">✅ Transparent & fair pricing</li>
                <li className="list-group-item">✅ Verified providers with community ratings</li>
                <li className="list-group-item">✅ Emergency quick-help mode</li>
                <li className="list-group-item">✅ Eco-friendly “Green Badge” providers</li>
                <li className="list-group-item">✅ Web-first + PWA for accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center text-white py-4 mt-5"
        style={{ backgroundColor: "#29289f" }}
      >
        <p className="mb-0">© 2025 CityAssist. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;
