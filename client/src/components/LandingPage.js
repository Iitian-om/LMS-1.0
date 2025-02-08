import React, { useEffect } from "react";
import "./LandingPage.css";
import HeroSection from "./HeroSection"; 
import Footer from "./Footer";

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
      {<nav>
        <div className="logo">
          <h1>
            EduHub <sub className="logo-subtext" style={{ fontWeight: 100, fontSize: "45%" }}>by IIT Patna</sub> {/* Apply class here */}
          </h1>
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>}

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