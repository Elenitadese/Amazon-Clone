import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Auth/Signup';
import Landing from './Landing/Landing'
import Payment from './Payment/Payment'
import Order from './Order/Order'
import Cart from './Cart/Cart'
import Result from './Result/Result'

const RauterPage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Signup />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/category/:categoryName" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default RauterPage