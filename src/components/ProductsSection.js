import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = useSelector((state) => state.products.products);
  console.log("products sections", products);

  return (
    <div className="grid grid-cols-3 px-8 my-16 gap-y-16 justify-items-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          text={product.text}
          colors={product.color}
          img={product.img}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsSection;
