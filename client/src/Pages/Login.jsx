// src/pages/Login.jsx
import React from "react";

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
    </div>
  );
};

export default Login;
