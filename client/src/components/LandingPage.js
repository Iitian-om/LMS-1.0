import React, { useEffect } from "react";
import "./LandingPage.css";
import HeroSection from "./HeroSection"; 
import Footer from "./Footer";
import Navbar from "./Navbar";

const LandingPage = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const elementInView = (el, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight - offset);
    };

    const displayScrollElement = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", displayScrollElement);
    displayScrollElement(); // Run on page load

    return () => {
      window.removeEventListener("scroll", displayScrollElement);
    };
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Parent Institute Section */}
      <section className="parent-institute scroll-animation">
        <h2>In Association with IIT Patna</h2>
        <p>EduHub is an initiative made by IITP Students and backed by IIT Patna, aimed at providing high-quality educational resources.</p>
        <a href="https://www.iitp.ac.in" target="_blank" rel="noopener noreferrer" className="institute-btn">Visit IIT Patna</a>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;