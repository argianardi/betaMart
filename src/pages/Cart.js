import React from "react";
import { Button, Card, Tooltip } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import { removeFromCart } from "../utils/redux/features/cartSlice";
import Layout from "../components/Layout";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  console.log("products in cart", products);

  return (
    <Layout>
      <h2 className="mt-2 text-xl font-bold">Cart</h2>
      {products.length > 0 ? (
        <div className="relative">
          {/* Product details */}
          <div>
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-full p-1 my-6 mdl:w-[500px] lgm:w-[600px]"
              >
                <div className="justify-between block mdm:flex">
                  <div className="flex w-full mdm:w-96">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-20 h-20 rounded-sm"
                    />
                    <h4 className="mt-2 ml-2 text-sm leading-none tracking-normal text-gray-900 capitalize font-inter">
                      {product.title}
                    </h4>
                  </div>

                  {/* Price and Buttons */}
                  <div className="flex items-center justify-end mx-2">
                    <div className="flex mr-10">
                      <p className="pr-2 mr-2 font-bold border-r-2 border-gray-400">
                        ${product.totalPricePerProduct}
                      </p>
                      <Tooltip
                        content="Remove from the Cart"
                        placement="bottom"
                      >
                        <button
                          onClick={() =>
                            dispatch(
                              removeFromCart({
                                id: product.id,
                                totalPricePerProduct:
                                  product.totalPricePerProduct,
                              })
                            )
                          }
                        >
                          <MdDelete color="red" className="text-2xl" />
                        </button>
                      </Tooltip>
                    </div>
                    <div className="flex items-center">
                      <button>
                        <AiOutlineMinusCircle className="text-lg" />
                      </button>
                      <p className="mx-2">{product.quantity}</p>
                      <button>
                        <AiOutlinePlusCircle className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Grand total and buy buttons  */}
          <div className="sticky mdl:abolute bottom-0 flex flex-row items-center justify-between w-full p-2 mdl:flex-col bg-blur bg-white/40 mdl:left-[100%] mdl:bottom-7 mdl:w-52  mdl:border-[1px] border-gray-400">
            <p className="flex flex-col w-full pt-2 text-base leading-none tracking-normal mdl:justify-between font-inter mdl:flex-row">
              <span className="text-sm font-bold text-gray-800">
                Grand Total
              </span>
              <span className="mt-1 font-bold text-black mdl:mt-0">
                ${grandTotal}{" "}
              </span>
            </p>
            <Button color="green" className="w-full mt-0 mdl:mt-2">
              Buy (100)
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="py-4 text-3xl font-bold leading-none tracking-normal text-black font-inter">
            Your cart is empty
          </h1>
          <p className="text-base leading-none tracking-normal text-black font-inter">
            Add some products
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
