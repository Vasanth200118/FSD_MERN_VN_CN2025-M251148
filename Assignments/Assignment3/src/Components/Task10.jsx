import React from "react";
import data from "./data.json"

function Task10() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Local JSON Products</h2>

      <div className="row">
        {data.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card p-3 shadow-sm mb-3">
              <h5>{product.name}</h5>
              <p>Price: ₹{product.price}</p>
              <span className="badge bg-secondary">ID: {product.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task10;
