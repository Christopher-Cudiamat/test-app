import React from "react";
import "./App.style.scss";
import heroImg from "./assets/images/hero-image.jpg";
import { textConfig } from "./const.config";
import { museumData } from "./datas/museumData.config";

const App: React.FC = () => {
  return (
    <div className="App">
      Almost
      <img src={heroImg} alt="test" />
      <p>{textConfig.TEST_TEXT}</p>
      {museumData.map((museum) => (
        <div key={museum.id}>
          <img src={museum.images[0].imgSrc} alt={museum.images[0].altText} />
        </div>
      ))}
    </div>
  );
};

export default App;
