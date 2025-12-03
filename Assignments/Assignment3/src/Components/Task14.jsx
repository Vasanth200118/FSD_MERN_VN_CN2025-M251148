import React, { useState } from "react";

export default function Task14() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  const [newFruit, setNewFruit] = useState("");

  const addFruit = (e) => {
    e.preventDefault();
    if (newFruit.trim()) {
      setFruits([...fruits, newFruit]);
      setNewFruit("");
    }
  };

  const deleteFruit = (index) => {
    const updated = fruits.filter((_, i) => i !== index);
    setFruits(updated);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Task 14 – Fruits List</h3>

      <form onSubmit={addFruit} className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Add new fruit"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>

      <ul className="list-group">
        {fruits.map((fruit, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {fruit}
            <button className="btn btn-danger btn-sm" onClick={() => deleteFruit(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
