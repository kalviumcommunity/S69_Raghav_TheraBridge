// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Correct import for v6 and above

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Use the new `useNavigate` hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add the logic to handle signup, like an API call

    // Redirect to login page after successful signup
    navigate("/login");  // Use `navigate` to go to the login page
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
