import React from "react";
import ProductList from "../components/Productlist"
import "./Products.css"

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    image: "",
  },
  {
    id: 2,
    name: "Headphones",
    price: 199,
    image: "",
  },
  {
    id: 3,
    name: "Smartphone",
    price: 699,
    image: "",
  },
  {
    id: 4,
    name: "Watch",
    price: 299,
    image: "",
  },
];

function Products({ addToCart }) {
  return (
    <div>
      <h2 >Products</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Products;
