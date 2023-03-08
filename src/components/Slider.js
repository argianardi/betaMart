import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  dotSlide,
  nextSlide,
  prevSlide,
} from "../utils/redux/features/sliderSlice";
import { sliderData } from "../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {/*  slider image and text */}
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === slideIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-95"
            }
          >
            <div>
              {parseInt(item.id) === slideIndex && (
                <img src={item.img} alt="shoes" />
              )}
            </div>
            <div className="absolute px-1 py-3 mx-auto top-44 inset-x-1/4 bg-black/20">
              <p className="text-3xl font-bold leading-none tracking-normal text-white font-inter">
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
          </div>
        ))}

        {/* dot slider */}
        <div className="flex absolute bottom-12 left-[45%]">
          {sliderData.map((dot, index) => (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index + 1 === slideIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index + 1))}
              ></div>
            </div>
          ))}
        </div>

        {/* next and previous slider buttons  */}
        <div>
          <button
            className="absolute top-[50%] right-4 bg-white rounded-full p-2"
            onClick={() => dispatch(nextSlide(slideIndex + 1))}
          >
            <BsChevronDoubleRight size={30} />
          </button>
          <button
            className="absolute top-[50%] left-4 bg-white rounded-full p-2"
            onClick={() => dispatch(prevSlide(slideIndex - 1))}
          >
            <BsChevronDoubleLeft size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
