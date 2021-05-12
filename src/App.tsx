import React from "react";
import "./App.style.scss";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import Pages from "./pages/Pages";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      {/* <Pages />
      <Footer /> */}
    </div>
  );
};

export default App;
