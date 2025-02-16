import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Footer from "./Footer";
import Navbar from "./Navbar";

const SignUp = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="welcome-message">
          <h2>Welcome to EduHub!</h2>
          <p>Join our community of learners and educators</p>
        </div>
        <div className="signup-container">
          <h1>Sign Up</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button type="submit" className="button">Create Account</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;