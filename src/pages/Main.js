import React from "react";
import Header from "../components/Header";
import NavigateButtons from "../components/NavigateButtons";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <div>
      <Header />
      <Slider />
      <NavigateButtons />
    </div>
  );
};

export default Main;
