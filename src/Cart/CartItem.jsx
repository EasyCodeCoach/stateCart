import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseByQuantity,
  removeItem,
  increaseByQuantity,
} from "../features/Cart/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" my-3 mx-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={item.image}
            className="card-img-top"
            alt="..."
            style={{ height: "40vh" }}
          />

          <p className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">quantity: {item.quantity}</p>
            <p className="card-text">Price: {item.price}</p>
          </p>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <p
              className="btn btn-primary "
              onClick={() => dispatch(decreaseByQuantity(item.id))}
            >
              -
            </p>
            <h2 className="px-2">{item.quantity}</h2>
            <p
              className="btn btn-primary"
              onClick={() => dispatch(increaseByQuantity(item.id))}
            >
              +
            </p>
          </div>
          <div class="d-grid gap-2">
            <button
              onClick={() => dispatch(removeItem(item.id))}
              class="btn btn-danger"
              type="button"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
