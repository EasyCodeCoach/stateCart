import React, { useState } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { showToggle } from "../features/modal/modalSlice";

function CartItems() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let [total, setTotal] = useState(0);
  cartItems.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  return (
    <>
      <div>
        <h1 className=" text-center">Amount: {total}</h1>
        <h2 className=" fs-3 mt-4 text-center text-primary">
          {cartItems.length < 1 && "Cart is empty"}
        </h2>

        <div className="modal-g">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close mx-3"
                onClick={() => dispatch(showToggle())}
              ></button>
            </div>
            <div className="modal-body d-flex flex-row justify-content-center flex-wrap">
              {cartItems.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
