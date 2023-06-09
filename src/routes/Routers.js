import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFood from "../pages/AllFood";
import FoodDetail from "../pages/FoodDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Routers = () => {
  return (
  <Routes>

    <Route path='/' element = {<Navigate to = '/home' />} />
    <Route path="/home" element={<Home/>} />
    <Route path="/foods" element={<AllFood/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/foods/ :id" element={<FoodDetail/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/checkout" element={<Checkout/>} />

  </Routes>
  );
};

export default Routers;