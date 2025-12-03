import React, { useEffect, useState } from "react";

function Task11() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Fetched Products</h2>

      <div className="row">
        {products.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card p-3 shadow-sm mb-3">
              <h5>{item.title}</h5>
              <p><strong>Brand:</strong> {item.brand}</p>
              <p><strong>Price:</strong> ₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task11;
