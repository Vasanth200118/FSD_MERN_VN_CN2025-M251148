import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Electronics() { return <h4>Electronics Products</h4>; }
function Fashion() { return <h4>Fashion Products</h4>; }
function Products() { return <h3>Select a category</h3>; }

export default function Task20() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <h3>Task 20 – Nested Routes</h3>
        <nav className="nav nav-pills mb-3">
          <Link className="nav-link" to="/products/electronics">Electronics</Link>
          <Link className="nav-link" to="/products/fashion">Fashion</Link>
        </nav>

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/electronics" element={<Electronics />} />
          <Route path="/products/fashion" element={<Fashion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
