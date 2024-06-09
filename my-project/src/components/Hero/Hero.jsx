import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import hero_img from "../../assets/Web_Photo_Editor.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Unlock Your Potential:</h1>
        <p>Expert-Led Training for a Brighter Future!</p>
      </div>
      <div className="hero-img">
        <img src={hero_img} alt="" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
