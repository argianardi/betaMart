import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts
  );

  return (
    <Layout>
      <h2 className="mt-2 text-xl font-bold">Wishlist</h2>
      {wishlistProducts.length > 0 ? (
        <div className="grid w-full grid-cols-2 gap-y-3 xs:w-[300px] sm:w-[360px] my-16 sml:grid-cols-3 mx-auto mdm:w-[650px] sml:w-[460px] justify-items-center mdm:grid-cols-4 mdm:gap-y-4 lgm:grid-cols-5 xlm:grid-cols-7 lgm:w-[800px] lgl:w-[850px] xlm:w-[1100px]">
          {wishlistProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              discount={product.discount}
              rating={product.rating}
              stock={product.stock}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="py-4 text-xl font-bold leading-none tracking-normal text-black sml:text-3xl font-inter">
            Your wishlist currently empty{" "}
          </p>
          <p className="mb-40 text-base leading-none tracking-normal text-black font-inter">
            Add some products
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Wishlist;
