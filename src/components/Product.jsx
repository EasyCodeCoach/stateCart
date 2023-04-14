import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/CartSlice";
function Product({ item }) {
  const dispatch = useDispatch();

  const AddItemToCart = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="col my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={item.image}
          className="card-img-top"
          alt="..."
          style={{ height: "40vh" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">quantity: {item.quantity}</p>
          <p className="card-text">Price: {item.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => AddItemToCart(item.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
