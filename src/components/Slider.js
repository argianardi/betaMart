import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide } from "../utils/redux/features/sliderSlice";
import { sliderData } from "../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {/* maping slider data */}
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
            <div>
              <p className="text-4xl font-bold leading-none tracking-normal text-white font-inter">
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
          </div>
        ))}

        <button onClick={() => dispatch(nextSlide(slideIndex + 1))}>
          Next
        </button>
        <button onClick={() => dispatch(prevSlide(slideIndex - 1))}>
          Previus
        </button>
      </div>
    </div>
  );
};

export default Slider;
