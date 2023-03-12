import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import clothes from "../assets/images/clothes.jpg";
import { filterProducts } from "../utils/redux/features/productsSlice";

const NavigateButtons = () => {
  const dispatch = useDispatch();

  const buttons = [
    "Hoodies",
    "Hijabs",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <>
      {/* buttons */}
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => (
          <Link
            to={`/filtered-products/${button}`}
            key={index}
            className="mr-4"
          >
            <Button
              onClick={() => dispatch(filterProducts(button))}
              variant="outlined"
              size="lg"
              className="duration-300 ease-out bg-blue-gray-50 hover:bg-blue-gray-300"
            >
              {button}
            </Button>
          </Link>
        ))}
      </div>

      {/* Sales tagline */}
      <div>
        <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md">
          <h3 className="text-lg font-bold leading-none tracking-normal text-center text-orange-900 font-inter">
            Sales Up To 50%
          </h3>
        </div>
        <img
          src={clothes}
          alt="clothes"
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600 mx-auto my-4"
        />
      </div>
    </>
  );
};

export default NavigateButtons;
