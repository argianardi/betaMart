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

      {/* product section */}
      <div className="grid grid-cols-2 w-[310px] sm:w-[360px] px-0 sm:px-4 sml:px-0 mx-auto my-16 sml:grid-cols-3 gap-y-2 sm:gap-y-4 sml:gap-y-2 mdm:w-[650px] sml:w-[460px] justify-items-center mdm:grid-cols-4 mdm:gap-y-4 lgm:grid-cols-6 lgm:w-[900px] xlm:w-[1250px] xlm:px-10 xlm:gap-y-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            discount={product.discountPercentage}
            rating={product.rating}
            stock={product.stock}
            category={product.category}
            image={product.thumbnail}
          />
        ))}
      </div>
      {/* <NavigateButtons /> */}
      <Footer />
    </>
  );
};

export default Main;
