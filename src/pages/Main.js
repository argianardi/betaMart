import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavigateButtons from "../components/NavigateButtons";
import ProductsSection from "../components/ProductsSection";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <>
      <Header />
      <Slider />
      <NavigateButtons />
      <ProductsSection />
      <Footer />
    </>
  );
};

// sampai di video 7 menit 5

export default Main;
