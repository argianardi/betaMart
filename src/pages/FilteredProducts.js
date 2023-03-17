import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const params = useParams();
  const { type } = params;

  return (
    <>
      <Header />
      <div className="pt-2">
        <div className="mb-10 pl-14">
          <h1 className="text-4xl font-bold leading-none tracking-normal text-gray-600 font-inter">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-y-10 justify-items-center">
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
      </div>
    </>
  );
};

export default FilteredProducts;
