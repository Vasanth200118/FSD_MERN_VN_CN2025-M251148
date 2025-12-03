import React, { useState } from "react";

function Task8() {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothes" },
    { name: "Mobile", category: "Electronics" },
    { name: "Jeans", category: "Clothes" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Product Filter</h2>

      {/* Filter Buttons */}
      <div className="mb-3 text-center">
        <button className="btn btn-dark mx-2" onClick={() => setFilter("All")}>
          All
        </button>

        <button
          className="btn btn-primary mx-2"
          onClick={() => setFilter("Electronics")}
        >
          Electronics
        </button>

        <button
          className="btn btn-success mx-2"
          onClick={() => setFilter("Clothes")}
        >
          Clothes
        </button>
      </div>

      {/* Display Filtered Products */}
      <ul className="list-group shadow">
        {filteredProducts.map((product, index) => (
          <li key={index} className="list-group-item">
            {product.name} — <span className="text-muted">{product.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task8;
