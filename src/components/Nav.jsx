import React from "react";
import { useSelector } from "react-redux";
function Nav() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            StateCart
          </a>

          <p className="navbar-brand ">
            <span className="badge text-bg-primary">{cartItems.length}</span>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
