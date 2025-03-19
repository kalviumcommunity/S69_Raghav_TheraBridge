// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";  // Import Link for routing

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* You can add a login form here */}
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      {/* Signup Button */}
      <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to="/signup">Signup</Link> {/* Link to the Signup page */}
      </div>
    </div>
  );
};

export default Login;

