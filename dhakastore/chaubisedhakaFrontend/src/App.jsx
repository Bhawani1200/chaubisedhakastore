import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Cart from "./components/cart/Cart";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Route>
          <Route path="/" element={<PrivateRoute publicPage />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-center" />
    </React.Fragment>
  );
}

export default App;
