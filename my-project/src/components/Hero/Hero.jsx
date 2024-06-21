import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";


const Hero = () => {
  return (
    <section id="hero">
      <div className="hero">
        <div className="hero-text">
          <h1>Unlock Your Potential:</h1>
          <p>Expert-Led Training for a Brighter Future!</p>
        </div>
        <a href="https://www.ril.com/"><button className="hero-btn">
          Explore more <img src={dark_arrow} alt="" />
        </button></a>
      </div>
    </section>
  );
};

export default Hero;
