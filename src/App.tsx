import React from "react";
import "./App.style.scss";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Header/Header.component";
import Pages from "./pages/Pages";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
};

export default App;
