import React from "react";
import heroImage from "../../assets/images/hero-image.jpg";
import Hero from "../../components/UI/Hero/Hero.component";
import { textConfig } from "../../const.config";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero
        image={heroImage}
        title={textConfig.HOME_HERO_TITLE}
        message={textConfig.HOME_HERO_MESSAGE}
      />
    </div>
  );
};

export default HomePage;
