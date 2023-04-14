import React from "react";
import Product from "./Product";

import { useSelector } from "react-redux";

function Products() {
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="mt-4 container grid row ">
      {products.map((item) => (
        <>
          <Product item={item} />
        </>
      ))}
    </div>
  );
}

export default Products;
