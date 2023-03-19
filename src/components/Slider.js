import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { sliderData } from "../assets/data/dummyData";

const Slider = () => {
  const [curentIndex, setCurentIndex] = useState(1);

  // Next slide handle
  const nextSlide = (index) => {
    setCurentIndex(index > sliderData.length ? 1 : index);
  };

  // Previous slide handle
  const prevSlide = (index) => {
    setCurentIndex(index < 1 ? sliderData.length : index);
  };

  // Dot slide handle
  const dotSlide = (index) => {
    setCurentIndex(index);
  };

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden rounded-xl">
      <div className="w-full h-full">
        {/*  slider image and text */}
        {sliderData.map((item) => (
          <div key={item.id}>
            <div className="absolute w-full h-full transition-all duration-500">
              {item.id === curentIndex && (
                <img
                  src={item.img}
                  alt="shoes"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div className="absolute mx-auto bg-black/5 top-5 inset-x-8 bg-blur">
              <p className="text-sm font-semibold leading-none tracking-normal text-center text-white sml:text-lg sm:text-base mdl:text-2xl lgl:text-4xl font-inter">
                {item.id === curentIndex && item.text}
              </p>
            </div>
          </div>
        ))}
        {/* dot slider */}
        <div className="absolute flex left-2 bottom-2 bg-blue-gray-200">
          {sliderData.map((dot, index) => (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index + 1 === curentIndex
                    ? "bg-green-300 rounded-full p-1 cursor-pointer"
                    : "bg-white rounded-full p-1 cursor-pointer"
                }
                onClick={() => dotSlide(index + 1)}
              ></div>
            </div>
          ))}
        </div>
        {/* next and previous slider buttons  */}
        <div>
          <button
            className="absolute top-[50%] right-2 bg-white rounded-full p-2"
            onClick={() => nextSlide(curentIndex + 1)}
          >
            <BsChevronDoubleRight className="w-3 h-3 md:h-4 md:w-4 xl:w-6 xl:h-6" />
          </button>
          <button
            className="absolute top-[50%] left-2 bg-white rounded-full p-2"
            onClick={() => prevSlide(curentIndex - 1)}
          >
            <BsChevronDoubleLeft className="w-3 h-3 md:h-4 md:w-4 xl:w-6 xl:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
