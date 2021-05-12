import React from "react";
import "./App.style.scss";
import heroImg from "./assets/images/hero-image.jpg";
import { textConfig } from "./const.config";

const App: React.FC = () => {
  return (
    <div className="App">
      Almost
      <img src={heroImg} alt="test" />
      <p>{textConfig.TEST_TEXT}</p>
    </div>
  );
};

export default App;
