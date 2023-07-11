import React from "react";
import Store from "./components/Store";
import {Routes, Route, Navigate} from 'react-router-dom';
import ProductDetails from "./components/ProductDetails";
import Navber from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
//contex
import ProductsContextProvider from "./context/productsContextProvider";
import CratContextProvider from "./context/CratContextProvider";
import './App.css'


function App() {
  return (
    
    <ProductsContextProvider>
      <CratContextProvider>
        <Navber/>
        <Routes>
          <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route path="/products" element={<Store/>}/>
          <Route path="/*" element={<Navigate to="./products"/>}/>
          <Route path="/cart" element ={<ShopCart/>}/>
        </Routes>
      </CratContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
