import { Button, Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { addToCart } from "../utils/redux/features/cartSlice";

const SingelProduct = () => {
  const product = useSelector((state) => state.products.singleProduct)[0];
  const dispatch = useDispatch();
  const { id } = useParams();
  const productSize = product.size ? product.size[0] : "";
  const [size, setSize] = useState(productSize);
  const productColor = product.color ? product.color[0] : "";
  const [color, setColor] = useState(productColor);

  return (
    <>
      {/* Header component */}
      <Header />
      <div className="flex items-center justify-center py-10">
        {/* Product image */}
        <div className="pl-44 grow-[2]">
          <img
            src={product.img}
            alt={product.name}
            className="rounded-lg h-[500px]"
          />
        </div>

        {/* Size and color options */}
        <div className="grow-[3]">
          <div className="max-w-lg">
            <h5 className="pb-4 text-2xl font-bold leading-none tracking-normal font-inter">
              {product.name}
            </h5>
            <p className="pb-4 text-xl font-bold leading-none tracking-normal text-orange-700 font-inter">
              15% OFF
            </p>
            <p className="pb-4 text-xl font-bold leading-none tracking-normal text-gray-600 font-inter">
              {product.text}
            </p>
            {/* Size options  */}
            {product.size.length > 0 && (
              <div className="pb-4">
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Pick a size
                </label>
                <select
                  id="size"
                  name="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  {product.size?.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {/* Color options */}
            {product.color.length > 0 && (
              <div className="pb-4">
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Pick a color
                </label>
                <select
                  id="color"
                  name="coor"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  {product.color.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {/* Button add to cart */}
            <Tooltip content="Add to Cart" placement="bottom">
              <Button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      name: product.name,
                      img: product.img,
                      text: product.text,
                      size: size,
                      color: color,
                      price: product.price,
                      amount: 1,
                      totalPrice: product.price,
                    })
                  )
                }
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
              >
                Add to Cart
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingelProduct;
