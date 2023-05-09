import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import productAPI from "../services/productAPI";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    await productAPI
      .get()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Loading condition
  if (isLoading) {
    return (
      <Layout>
        <div className="-mt-24">
          <Loading />
        </div>
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
          />
        ))}
      </div>
    </Layout>
  );
};

export default Main;
