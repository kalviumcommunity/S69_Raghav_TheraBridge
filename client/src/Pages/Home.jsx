// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom"; // To add routing for the login page

const Home = () => {
  return (
    <div className="home-container">
      {/* Header with Login Button */}
      <header className="home-header">
        <h1>Welcome to TheraBridge</h1>
        <p>Your support system for therapists</p>
        <Link to="/login" className="login-button">Login</Link>
      </header>

      {/* Section with Information about the Site */}
      <section className="home-info">
        <h2>What is TheraBridge?</h2>
        <p>
          TheraBridge is designed to help therapists manage their workload, track
          their sessions, prevent burnout, and provide a community for support.
        </p>
        <h3>Our Features:</h3>
        <ul>
          <li>Session Tracking</li>
          <li>Workload Management</li>
          <li>Burnout Prevention</li>
          <li>Community Support</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2025 TheraBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
