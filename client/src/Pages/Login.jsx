import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isOtpLogin, setIsOtpLogin] = useState(false); // Track OTP login state

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  const handleOtpLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login-with-otp", { phoneNumber });
      setIsOtpLogin(true); // After sending OTP, switch to OTP verification screen
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", { otp });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}

        {!isOtpLogin ? (
          <form onSubmit={handleEmailPasswordLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login with Email</button>
          </form>
        ) : (
          <form onSubmit={handleOtpVerification}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Verify OTP</button>
          </form>
        )}

        {!isOtpLogin && (
          <form onSubmit={handleOtpLogin}>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button type="submit">Login with OTP</button>
          </form>
        )}

        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
