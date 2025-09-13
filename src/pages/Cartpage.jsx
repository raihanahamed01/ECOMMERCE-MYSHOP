import React from "react";

function CartPage({ cart, removeFromCart }) {
  return (
    <div >
      <h2 >Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} >
            <span>
              {item.name} - ${item.price}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
             
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
