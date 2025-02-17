import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="welcome-message">
          <h2>Welcome Back!</h2>
          <p>We're glad to see you again</p>
        </div>
        <div className="login-container">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="button">Login</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;