import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { BsFillCartFill, BsHeartFill } from "react-icons/bs";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Logo and Navbar */}
      <div className="flex items-center justify-around my-2">
        {/* Logo */}
        <Link to={"/"} className="flex flex-col items-center">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="-mt-2 font-bold text-green-700 font-inter">
            Quick Mart
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
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            <div className="relative">
              {totalAmount > 0 && (
                <span className="absolute w-5 h-5 text-sm text-center bg-gray-300 rounded-full -top-3 -right-3 font-inter">
                  {totalAmount}
                </span>
              )}
              <BsFillCartFill size={20} />
            </div>
            <p className="mr-2 ml-[1px] text-base font-medium leading-none tracking-normal text-center font-inter">
              Cart
            </p>
            <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
          </div>
          <div className="mr-4 text-base font-medium leading-none tracking-normal text-center font-inter">
            <button>Logout</button>
          </div>
        </nav>
      </div>

      {/* Store superiority */}
      <section className="flex justify-around w-full p-2 bg-black">
        <div className="text-sm font-medium leading-none tracking-normal text-center text-white font-inter">
          50% OFF
        </div>
        <div className="text-sm font-medium leading-none tracking-normal text-center text-white font-inter">
          Free shipping and returns
        </div>
        <div className="text-sm font-medium leading-none tracking-normal text-center text-white font-inter">
          Different payment methods
        </div>
      </section>
    </header>
  );
};

export default Header;
