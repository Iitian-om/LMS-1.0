import React from "react";
import "../css/LandingPage.css";
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-heading">Learn. Innovate. Lead.</h2>
        <p className="hero-intro">Empowering students through expertly crafted courses available anytime, anywhere on education and technology.</p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
