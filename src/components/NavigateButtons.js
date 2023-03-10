import { Button } from "@material-tailwind/react";
import React from "react";
import clothes from "../assets/images/clothes.jpg";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <div>
      {/* buttons */}
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant="outlined"
            size="lg"
            className="mr-4 duration-300 ease-out bg-blue-gray-50 hover:bg-blue-gray-300"
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default NavigateButtons;
