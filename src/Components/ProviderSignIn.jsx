import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ProviderSignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // ✅ handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value) ? "Invalid email format" : "",
      }));
    }

    setFormData({ ...formData, [name]: value });
  };

  // ✅ handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Check required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "This field is required";
    });

    newErrors = { ...newErrors, ...errors };
    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      alert("Sign In successful!");
      setFormData({ email: "", password: "" });
      navigate("/dashboard"); // redirect to Dashboard.jsx
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-start">
        {/* Right Side Form */}
        <div className="col-md-5">
          <div className="card shadow-lg rounded-4 p-5">
            <h2 className="mb-4 text-center" style={{ color: "#29289f" }}>
              Service Provider SignIn
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              {/* Sign In Button */}
              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>

              {/* Sign Up Link */}
              <p className="mt-3 text-center">
                New user? <a href="/provider">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderSignIn;
