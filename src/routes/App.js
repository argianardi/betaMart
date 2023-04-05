import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FilteredProducts from "../pages/FilteredProducts";
import Main from "../pages/Main";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filtered-products/:type" element={<FilteredProducts />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
