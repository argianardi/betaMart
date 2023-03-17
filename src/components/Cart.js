import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../utils/redux/features/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Dialog
      open={openModal}
      handler={() => setOpen(false)}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="overflow-scroll h-[500px] "
    >
      <DialogHeader>Cart</DialogHeader>
      {cart.length > 0 ? (
        <>
          <DialogBody
            divider
            className="flex flex-col items-start justify-center "
          >
            {cart.map((item, index) => (
              <div key={index} className="grid grid-cols-2 py-4">
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[125px] rounded-md"
                  />
                  <h4 className="py-4 pt-2 font-bold leading-none tracking-normal text-black font-inter">
                    {item.name}
                  </h4>
                  <p className="max-w-xs pt-2 text-xs leading-none tracking-normal text-black font-inter">
                    {item.text}
                  </p>
                </div>
                <div>
                  <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                    Selected size: <span>{item.size}</span>
                  </p>
                  <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                    Selector color:{" "}
                    <span
                      className="px-2 ml-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                  </p>
                  <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                    Amount: <span className="ml-2">{item.amount}</span>
                  </p>
                  <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                    Single Item Price:{" "}
                    <span className="ml-2">{item.price}$</span>
                  </p>
                  <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                    Total Item Prices:{" "}
                    <span className="ml-2">{item.totalPrice}$</span>
                  </p>
                  <div className="pt-4">
                    <Tooltip content="Remove from the Cart" placement="bottom">
                      <Button
                        onClick={() => dispatch(removeFromCart(item))}
                        size="sm"
                        color="red"
                        ripple={true}
                        variant="filled"
                      >
                        Remove
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </DialogBody>
          <DialogFooter className="flex items-center justify-start">
            <p className="pt-2 text-base leading-none tracking-normal text-black font-inter">
              Total Price of All Products:{" "}
              <span className="ml-2">{totalPrice}$</span>
            </p>
          </DialogFooter>
        </>
      ) : (
        <DialogBody divider>
          <div>
            <h1 className="py-4 text-3xl font-bold leading-none tracking-normal text-black font-inter">
              Your cart is empty
            </h1>
            <p className="text-base leading-none tracking-normal text-black font-inter">
              Add some products
            </p>
          </div>
        </DialogBody>
      )}
    </Dialog>
  );
};

export default Cart;
