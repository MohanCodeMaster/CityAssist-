import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../assets/pic.jpg";


function SeekerSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Please enter your name";
    if (!/^[0-9]{10}$/.test(formData.contact))
      tempErrors.contact = "Please enter a valid 10-digit contact number";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Please enter a valid email address";
    if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters long";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Account Created Successfully ✅");
      navigate("/Userservices");
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={pic} // 
            alt="signup"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2 className="mb-4">Seeker Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              <div className="mb-3">
                <label>
                  Contact <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                  value={formData.contact}
                  onChange={handleChange}
                />
                {errors.contact && <small className="text-danger">{errors.contact}</small>}
              </div>

              <div className="mb-3">
                <label>
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="mb-3">
                <label>
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>

            <p className="mt-3">
              Already have an account? <Link to="/seekersignin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeekerSignUp;
