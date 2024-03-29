import React from "react";
import { Button, Card, Tooltip } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../utils/redux/features/cartSlice";
import Layout from "../components/Layout";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Layout>
      <h2 className="mt-2 text-xl font-bold">Cart</h2>
      {products.length > 0 ? (
        <div>
          {/* Product details */}
          <div>
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-full p-1 my-6 mdl:w-[470px] lgm:w-[600px]"
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
                                quantity: product.quantity,
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
                      <button
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        disabled={product.quantity === 1 && true}
                      >
                        <AiOutlineMinusCircle
                          className={`text-2xl font-bold ${
                            product.quantity === 1
                              ? `text-gray-400`
                              : `text-green-500`
                          }`}
                        />
                      </button>
                      <p className="mx-2">{product.quantity}</p>
                      <button
                        onClick={() => dispatch(increaseQuantity(product.id))}
                      >
                        <AiOutlinePlusCircle className="text-2xl font-bold text-green-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Grand total and buy buttons  */}
          <div className="sticky bottom-0 flex flex-row items-center justify-between w-full p-2 mdl:flex-col bg-blur bg-white/40 mdl:left-[100%] mdl:bottom-7 mdl:w-52  mdl:border-[1px] border-gray-400">
            <p className="flex flex-col w-full pt-2 text-base leading-none tracking-normal mdl:justify-between font-inter mdl:flex-row">
              <span className="text-sm font-bold text-gray-800">
                Grand Total
              </span>
              <span className="mt-1 font-bold text-black mdl:mt-0">
                ${grandTotal}
              </span>
            </p>
            <Button color="green" className="w-full mt-0 mdl:mt-2">
              Buy ({totalQuantity})
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="py-4 text-2xl font-bold leading-none tracking-normal text-black xs:text-3xl font-inter">
            Your cart is empty
          </h1>
          <p className="mb-40 text-base leading-none tracking-normal text-black font-inter">
            Add some products
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
