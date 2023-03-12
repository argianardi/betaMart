import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingelProduct from "../pages/SingelProduct";
import FilteredProducts from "../pages/FilteredProducts";
import Main from "../pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filtered-products/:type" element={<FilteredProducts />} />
        <Route path="/one-product/:id" element={<SingelProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
