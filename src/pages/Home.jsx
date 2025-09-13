import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MyShop</h1>
          <p className="hero-subtitle">
            Your one-stop destination for the best deals on electronics, fashion
            & more!
          </p>
          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured">
        <h2 className="featured-title">Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://i.pinimg.com/1200x/1a/77/35/1a773521bfed82e898d0c9ba73fd3592.jpg"
              alt="Laptop"
            />
            <h3>Laptop</h3>
            <p>$999</p>
          </div>
          <div className="product-card">
            <img
              src="https://i.pinimg.com/736x/1a/97/cc/1a97ccc9b66f7b9d76373eae0260ac7b.jpg"
              alt="Headphones"
            />
            <h3>Headphones</h3>
            <p>$199</p>
          </div>
          <div className="product-card">
            <img
              src="https://i.pinimg.com/736x/72/1b/7a/721b7ace987f64cab82d511b7837a8cc.jpg"
              alt="Smartphone"
            />
            <h3>Smartphone</h3>
            <p>$699</p>
          </div>
          <div className="product-card">
            <img
              src="https://i.pinimg.com/736x/a8/6b/17/a86b17cd64cf9d3e2201565f5e590e66.jpg"
              alt="Watch"
            />
            <h3>Smart Watch</h3>
            <p>$299</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
