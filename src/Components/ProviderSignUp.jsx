import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProviderSignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    service: "",
    experience: "",
    amount: "",
    unit: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate name (only letters and spaces)
    if (name === "name") {
      if (/[^a-zA-Z\s]/.test(value)) {
        setErrors((prev) => ({ ...prev, name: "Please enter a valid name (letters only)." }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    // Validate contact, experience, amount (only numbers)
    if (name === "contact" || name === "experience" || name === "amount") {
      if (/[^0-9]/.test(value)) {
        setErrors((prev) => ({ ...prev, [name]: "Please enter a valid number." }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "This field cannot be empty.";
    });

    newErrors = { ...newErrors, ...errors };
    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      alert("Form submitted successfully!");
      console.log(formData);
      navigate("/dashboard");
      setFormData({
        name: "",
        contact: "",
        email: "",
        password: "",
        service: "",
        experience: "",
        amount: "",
        unit: "",
        description: "",
      });
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-start">
        {/* Left Side Image */}
        

        {/* Right Side Form Card */}
        <div className="col-md-5">
          <div className="card shadow-lg rounded-4 p-5">
            <h2 className="mb-4 text-center" style={{ color: "#29289f" }}>
              Service Provider SignUp
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              {/* Contact */}
              <div className="mb-3">
                <label className="form-label">
                  Contact <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                />
                {errors.contact && <small className="text-danger">{errors.contact}</small>}
              </div>

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

              {/* Service */}
              <div className="mb-3">
                <label className="form-label">
                  Service <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select service</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Painting">Painting</option>
                </select>
                {errors.service && <small className="text-danger">{errors.service}</small>}
              </div>

              {/* Years of Experience */}   
              <div className="mb-3">
              <label className="form-label">Years of Experience</label>
              <input
                type="number"
                className="form-control"
                name="experience"
                min="0"
                max="50"
                step="1"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>


              {/* Amount */}
              <div className="mb-3">
                <label className="form-label">
                  Amount <span className="text-danger">*</span>
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control me-2"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                  />
                  <select
                    className="form-select"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                  >
                    <option value="">Select unit</option>
                    <option value="hr">Per Hour</option>
                    <option value="day">Per Day</option>
                    <option value="month">Per Month</option>
                  </select>
                </div>
                {errors.amount && <small className="text-danger">{errors.amount}</small>}
                {errors.unit && <small className="text-danger">{errors.unit}</small>}
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">
                  Description <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your service"
                ></textarea>
                {errors.description && <small className="text-danger">{errors.description}</small>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>

              {/* Sign In Link */}
              <p className="mt-3 text-center">
                Already have an account? <a href="/provider-signin">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ProviderSignUp;
