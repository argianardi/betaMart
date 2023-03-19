import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
// import NavigateButtons from "../components/NavigateButtons";
// import ProductsSection from "../components/ProductsSection";
import Slider from "../components/Slider";
import {
  getAllProducts,
  productsSelectors,
} from "../utils/redux/features/productsSlice";

const Main = () => {
  const dispatch = useDispatch();

  const products = useSelector(productsSelectors.selectAll);
  const getAllProductsStatus = useSelector((state) => state.products.status);
  const getAllProductsError = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Header />

      {/* slider section */}
      <div className="h-[150px] sml:h-[200px] lgl:h-[300px] px-2 sm:px-4 mdl:px-12 lgl:px-20  my-3">
        <Slider />
      </div>

      {/* <NavigateButtons /> */}
      <Footer />
    </>
  );
};

export default Main;
