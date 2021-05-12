import React from "react";
import { IHeroProps } from "./hero.type";
import "./hero.style.scss";

const Hero: React.FC<IHeroProps> = ({ title, message, image }) => {
  return (
    <div
      className="hero hero-image"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Hero;
