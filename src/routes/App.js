import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "../pages/FilteredProducts";
import Main from "../pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filtered-products/:type" element={<FilteredProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
