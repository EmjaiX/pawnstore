import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {Home,Login} from './imports';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Transaction from './pages/Transaction';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Checkout" element={<Checkout />}/>
      <Route path="/Transaction" element={<Transaction />}/>
      <Route path="/Admin" element={<Admin />}/>
        
    </Routes>
  </BrowserRouter>
);
