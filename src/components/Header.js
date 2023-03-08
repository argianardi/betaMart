import React from "react";
import logo from "../assets/images/logo.png";

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
          <img src={logo} alt="logo image" className="h-10" />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="mr-2 text-base font-medium leading-none tracking-normal text-center font-inter">
              Wish List
            </p>
          </div>
          {/* Cart button */}
          <div className="flex flex-row items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p className="mr-2 text-base font-medium leading-none tracking-normal text-center font-inter">
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
