import React from 'react'
import Login from './layouts/Login/Login'
import SignUp from "./layouts/SignUp/SignUp";
import Home from './layouts/Home/Home';
import ProfileSetting from "./layouts/ProfileSetting/ProfileSetting";
import Categories from "./layouts/Categories/Categories";
import Basket from "./layouts/Basket/Basket";
import Product from './layouts/Product/Product';


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './layouts/Checkout/Checkout';

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/profile" element={<ProfileSetting />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/product" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </BrowserRouter>
  );
}
