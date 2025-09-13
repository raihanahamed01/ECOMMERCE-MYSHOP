import React from "react";
import ProductCard from "./Productcard"
import "./Productlist.css"

function ProductList({ products, addToCart }) {
  return (
    <div >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
