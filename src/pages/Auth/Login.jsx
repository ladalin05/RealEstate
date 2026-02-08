import React, { useContext, useState } from "react";
import "../../assets/styles/login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../../core/api/authApi";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await loginUser(formData);

        if (result.success) {
          setSuccessMessage("Login successful!");
          navigate("/"); // optional redirect
        } else {
          setSuccessMessage(result.message);
        }
    } catch (error) {
      console.error(error);
      setError("Error creating user.");
    }
  };


  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div
      className="d-flex justify-content-center align-items-center py-5 bg-light"
      style={{ minHeight: "50vh" }}
    >
      <div
        className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5"
        style={{ maxWidth: 448 }}
      >
        <div className="card login-card p-4 p-sm-5 shadow">
          <div className="text-center mb-4">
            <i
              className="fas fa-sign-in-alt mb-3"
              style={{ color: "#4f46e5", fontSize: "2.5rem" }}
            ></i>
            <h1 className="h3 fw-bold text-dark">Welcome Back</h1>
            <p className="text-secondary">
              Sign in to continue to your dashboard.
            </p>
          </div>

          {/* Success message */}
          {successMessage && (
            <div className="alert alert-success d-flex align-items-center">
              <i className="fas fa-check-circle me-2"></i>
              {successMessage}
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="alert alert-danger d-flex align-items-center">
              <i className="fas fa-exclamation-circle me-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="d-grid gap-3">
            {/* Email */}
            <div className="input-icon-group position-relative">
              <i
                className="fas fa-envelope position-absolute"
                style={{
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              ></i>
              <input
                type="email"
                name="email"
                className="form-control ps-5 py-3 rounded-3"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="input-icon-group position-relative">
              <i
                className="fas fa-lock position-absolute"
                style={{
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              ></i>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control ps-5 py-3 rounded-3"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <span
                className="password-toggle position-absolute"
                style={{
                  right: "2.4rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={togglePassword}
              >
                <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </span>
            </div>

            {/* Remember me & Forgot password */}
            <div className="row mt-2">
              <div className="col-md-6 col-6 text-start">
                <div className="form-check">
                  <input
                    id="check-l"
                    type="checkbox"
                    name="remember"
                    className="form-check-input"
                  />
                  <label htmlFor="check-l" className="form-check-label">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-md-6 col-6 text-end">
                <Link
                  to="/forgot-password"
                  className="text-decoration-none text-primary"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary btn-lg rounded-3 fw-semibold shadow-sm"
              disabled={isLoading || successMessage}
            >
              {isLoading ? (
                <span className="d-flex align-items-center justify-content-center">
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Logging In...
                </span>
              ) : (
                "LOGIN"
              )}
            </button>

            {/* Signup */}
            <p className="text-center small text-secondary mt-3">
              Don’t have an account?{" "}
              <Link
                to="/register"
                style={{ color: "#4f46e5" }}
                className="text-decoration-none fw-medium"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
