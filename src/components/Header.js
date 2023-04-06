import React from "react";
import { BsFillCartFill, BsHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Logo and Navbar */}
      <div className="flex items-center justify-around my-2">
        {/* Logo */}
        <Link to={"/"} className="flex flex-col items-center">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="-mt-2 font-bold text-green-700 font-inter">
            Beta Mart
          </h1>
        </Link>

        {/* Navbar */}
        <nav className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <BsHeartFill size={20} />
            <p className="ml-[1px] mr-2 text-base font-medium leading-none tracking-normal text-center font-inter">
              Wish List
            </p>
          </div>
          <Link
            to={"/cart"}
            className="flex flex-row items-center cursor-pointer"
          >
            <div className="relative">
              {totalQuantity > 0 && (
                <span className="absolute w-5 h-5 text-sm text-center bg-gray-300 rounded-full -top-3 -right-3 font-inter">
                  {totalQuantity}
                </span>
              )}
              <BsFillCartFill size={20} />
            </div>
            <p className="mr-2 ml-[1px] text-base font-medium leading-none tracking-normal text-center font-inter">
              Cart
            </p>
          </Link>
        </nav>
      </div>

      {/* Store superiority */}
      <section className="flex justify-between w-full p-2 bg-black sml:px-4 mdl:px-10 lgm:px-20">
        <p className="text-xs font-medium leading-none tracking-normal text-white sml:text-sm font-inter">
          50% OFF
        </p>
        <p className="text-xs font-medium leading-none sml:ml-0 tracking-normal text-white sml:text-sm ml-0 sm:ml-[2px] font-inter">
          Free shipping and returns
        </p>
        <p className="text-xs font-medium leading-none ml-0 sm:ml-[2px] sml:ml-0 tracking-normal text-white sml:text-sm font-inter">
          Different payment methods
        </p>
      </section>
    </header>
  );
};

export default Header;
