import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllProducts,
  productsSelectors,
} from "../utils/redux/features/productsSlice";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";

const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.selectAll);
  const getAllProductsStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Loading condition
  if (getAllProductsStatus === "loading") {
    return (
      <Layout>
        {/* <Header /> */}
        <div className="-mt-24">
          <Loading />
        </div>
        {/* <Footer /> */}
      </Layout>
    );
  }

  return (
    <Layout>
      {/* slider section */}
      <div className="h-[150px] sml:h-[200px] lgl:h-[300px] my-3">
        <Slider />
      </div>

      {/* product section */}
      <div className="grid w-full gap-y-3 grid-cols-2 xs:w-[300px] sm:w-[360px] my-16 sml:grid-cols-3 mx-auto mdm:w-[650px] sml:w-[460px] justify-items-center mdm:grid-cols-4 mdm:gap-y-4 lgm:grid-cols-5 xlm:grid-cols-7 lgm:w-[800px] lgl:w-[850px] xlm:w-[1100px]">
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
            // onGotoProductDetail={() => gotoProductDetailHandler(product)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Main;
