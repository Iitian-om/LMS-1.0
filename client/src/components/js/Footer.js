import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Description */}
        <div className="footer-section">
          <h3>EduHub by IITP</h3>
          <p>
            Empowering students with expertly crafted courses and resources designed for modern learning needs since 2025.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><i className="fas fa-angle-right"></i><Link to="/meet-our-team">Our Founders</Link></li>
            <li><i className="fas fa-angle-right"></i><a href="#terms_of_use">Terms of Use</a></li>
            <li><i className="fas fa-angle-right"></i><a href="#privacy_policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Bihta, Patna - 801106</li>
            <li><i className="fas fa-envelope"></i> info@eduhub.com</li>
            <li><i className="fas fa-phone"></i> +91 12345 67890</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-bottom-p">&copy; 2025 EduHub by IITP. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
