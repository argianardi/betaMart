import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { BsCart, BsHeart } from "react-icons/bs";

const ProductDetails = ({
  openProductDetails,
  setOpenProductDetails,
  title,
  description,
  price,
  discount,
  rating,
  stock,
  category,
  image,
}) => {
  const [amount, setAmount] = useState(0);

  //   Handle decrease Amount
  const handleDecreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  //   Handle  Increase Amount
  const handleIncreaseAmount = () => {
    setAmount(amount + 1);
  };

  return (
    <Dialog
      open={openProductDetails}
      handler={setOpenProductDetails}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="max-w-full w-[310px] sm:w-[360px] sml:w-[480px] mdl:w-[600px] lgl:w-[800px] xlm:w-[900px] mx-auto max-h-screen overflow-y-auto rounded-md"
    >
      {/* Button close */}
      <div className="sticky top-0 z-20 text-end">
        <button
          onClick={() => setOpenProductDetails(false)}
          className="px-2 text-xl font-bold text-black bg-white border-2 border-gray-800"
        >
          X
        </button>
      </div>

      <div className="items-center block lgl:flex">
        {/*Product image, price, title  and wishlist & cart button*/}
        <div className="w-full lgl:w-[800px] xlm:w-[900px]">
          <img
            src={image}
            alt={title}
            className="object-cover w-full -mt-8 h-[200px] sml:h-[250px] mdm:h-[300px] lgl:w-full"
          />
          <div className="flex justify-between px-10 mt-2 text-black mdl:px-28 lgl:px-5 xlm:px-20">
            <button className="flex items-center ">
              <BsHeart color="red" />{" "}
              <span className="ml-[2px] text-sm font-bold text-gray-900">
                Wishlist
              </span>
            </button>
            <div className="flex items-center border-[1px] border-black rounded-md h-7 ">
              <button onClick={handleDecreaseAmount} className="px-2 font-bold">
                -
              </button>
              <p className="mx-2">{amount}</p>
              <button onClick={handleIncreaseAmount} className="px-2 font-bold">
                +
              </button>
            </div>
            <button className="flex items-center bg-[#00aa5b] rounded-sm px-2">
              <BsCart color="white" />{" "}
              <span className="ml-[2px] text-sm text-white font-bold">
                Cart
              </span>
            </button>
          </div>
          <h4 className="pt-2 pl-2 text-sm font-semibold text-black font-inter">
            {price}$
          </h4>
          <h5 className="pl-2 text-base text-black">{title}</h5>
        </div>

        <div>
          {/* Product details */}
          <div className="pl-2 pt-1 mt-4 lgl:mt-0 text-sm text-gray-800 border-t-[2px] border-t-gray-800 lgl:border-0">
            <h4 className="font-bold text-black">Product Details</h4>
            <p>Category: {category}</p>
            <p>Stok: {stock}</p>
            <p>Discount: {discount}%</p>
            <div className="flex">
              <span>Rating:</span>
              <span className="flex items-center ml-1">
                {" "}
                <FaStar color="#ffc107" /> {rating}
              </span>
            </div>
          </div>

          {/* Product Description */}
          <div className="pl-2 mt-3 text-sm">
            <h4 className="font-bold text-black">Product Description</h4>
            <p className="text-gray-800">{description}</p>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductDetails;
