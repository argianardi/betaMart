import React from "react";
import logo from "../assets/images/logo.png";
import { BsFillCartFill, BsHeartFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      {/* Welcome greeting */}
      <div className="w-full p-2 bg-black">
        <h3 className="text-2xl font-bold leading-none tracking-normal text-center text-white font-inter">
          Wellcome All
        </h3>
      </div>

      {/* Logo and Navbar */}
      <div className="flex items-center justify-around my-7">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo" className="h-10" />
          <p className="-mt-2 font-bold text-green-700 font-inter">
            Quick Mart
          </p>
        </div>

        {/* Navbar */}
        <div className="flex flex-row items-center">
          {/* Logout button */}
          <button className="mr-4 text-base font-medium leading-none tracking-normal text-center font-inter">
            Logout
          </button>
          {/* Wish List button */}
          <div className="flex flex-row items-center">
            <BsHeartFill size={20} />
            <p className="ml-[1px] mr-2 text-base font-medium leading-none tracking-normal text-center font-inter">
              Wish List
            </p>
          </div>
          {/* Cart button */}
          <div className="flex flex-row items-center cursor-pointer">
            <BsFillCartFill size={20} />
            <p className="mr-2 ml-[1px] text-base font-medium leading-none tracking-normal text-center font-inter">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* store superiority */}
      <div className="flex justify-around w-full p-4 bg-black">
        <div className="text-base font-medium leading-none tracking-normal text-center text-white font-inter">
          50% OFF
        </div>
        <div className="text-base font-medium leading-none tracking-normal text-center text-white font-inter">
          Free shipping and returns
        </div>
        <div className="text-base font-medium leading-none tracking-normal text-center text-white font-inter">
          Different payment methods
        </div>
      </div>
    </>
  );
};

export default Header;
