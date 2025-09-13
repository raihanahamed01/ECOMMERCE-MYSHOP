import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount, user, setUser }) {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MyShop
      </Link>
      <div className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        {user ? (
          <>
            <span className="welcome">Hello, {user.username}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
