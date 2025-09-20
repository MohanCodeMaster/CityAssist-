import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import pic from "../assets/pic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";


function SeekerSignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
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
      alert("Login Successful ✅");
       navigate("/userservices"); // Redirect to UserServices.jsx
     
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={pic} // replace with your image
            alt="signin"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2 className="mb-4">Seeker Sign In</h2>
            <form onSubmit={handleSubmit}>
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
                Sign In
              </button>
            </form>

            <p className="mt-3">
              Don’t have an account? <Link to="/seekersignup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeekerSignIn;
