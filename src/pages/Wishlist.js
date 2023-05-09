import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import WishlistProductCard from "../components/WishlistProductCard";

const Wishlist = () => {
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts
  );

  return (
    <Layout>
      <h2 className="mt-2 text-xl font-bold">Wishlist</h2>
      {wishlistProducts.length > 0 ? (
        <div
          className="w-full gap-y-3 xs:w-[300px] sm:w-[360px] my-10 mdm:w-[600px] mdl:w-[700px] lgm:w-full sml:w-[460px] grid grid-cols-1 sml:grid-cols-2 mdm:grid-cols-3 lgm:grid-cols-4 mx-auto xlm:grid-cols-5
        justify-items-center mdm:justify-items-start
        "
        >
          {wishlistProducts.map((product) => (
            <WishlistProductCard
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
