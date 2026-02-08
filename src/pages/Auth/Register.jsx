import React, { useState } from "react";
import '../../assets/styles/login.css';

const RegisterPage = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsLoading(true);

    if (!recaptchaVerified) {
      setError("Please verify you are not a robot.");
      setIsLoading(false);
      return;
    }

    // Simulate API delay
    await new Promise((res) => setTimeout(res, 1500));

    setIsLoading(false);
    setSuccessMessage("Successfully logged in! Redirecting now...");
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const verifyCaptcha = () => setRecaptchaVerified(true);

  return (
    <div
      className="d-flex justify-content-center align-items-center py-2 bg-light" 
      style={{ minHeight: "50vh", }}
    >
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5" style={{ maxWidth: 448 }}>
        <div className="card login-card p-4 p-sm-5 shadow">
          <div className="text-center mb-4">
            <i className="fa-solid fa-user-plus mb-3" style={{ color: "#4f46e5", fontSize: "2rem" }}></i>
            <h1 className="h3 fw-bold text-dark">Create Your Account</h1>
            <p className="text-secondary">Join us and manage your projects with ease.</p>
          </div>

          {successMessage && (
            <div className="alert alert-success d-flex align-items-center">
              <i className="fas fa-check-circle me-2"></i>
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="d-grid gap-3">
            {/* User */}
            <div className="input-icon-group position-relative">
              <i className="fa-regular fa-user position-absolute" style={{ left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}></i>
              <input
                type="text"
                name="name"
                className="form-control ps-5 py-3 rounded-3"
                placeholder="Full Name or Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            {/* Email */}
            <div className="input-icon-group position-relative">
              <i className="fas fa-envelope position-absolute" style={{ left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}></i>
              <input
                type="email"
                name="email"
                className="form-control ps-5 py-3 rounded-3"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="input-icon-group position-relative">
              <i className="fas fa-lock position-absolute" style={{ left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}></i>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control ps-5 py-3 rounded-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
              <span
                className="password-toggle position-absolute"
                style={{ right: "2.4rem", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
                onClick={togglePassword}
              >
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </span>
            </div>
            {/* Confirm Password */}
            <div className="input-icon-group position-relative">
              <i className="fas fa-lock position-absolute" style={{ left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}></i>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                className="form-control ps-5 py-3 rounded-3"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
              />
              <span
                className="password-toggle position-absolute"
                style={{ right: "2.4rem", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
                onClick={togglePassword}
              >
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </span>
            </div>

            
            <div class="row mt-20">
                <div class="col-md-6 col-6 text-left">
                    <div class="res-box">
                        <input id="check-l" type="checkbox" name="remember" />
                        <label for="check-l">Remember me</label>
                    </div>
                </div>
                <div class="col-md-6 col-6 text-right">
                    <div class="text-end ">
                        <a href="#" className="text-decoration-none" >Forgot Password?</a>
                    </div>
                </div>
            </div>


            {/* Submit */}
            <button type="submit" className="btn btn-primary btn-lg rounded-3 fw-semibold shadow-sm" disabled={isLoading || successMessage}>
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
            <p className="text-center small text-secondary mt-1">
              Already registered? {" "}
              <a href="login" style={{ color: "#4f46e5" }} className="text-decoration-none fw-medium">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
