import React, { useState } from "react";

function Task9() {
  const students = ["Arun", "Meena", "Kavin", "Saran", "Divya", "Karthik"];
  const [search, setSearch] = useState("");

  const filtered = students.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Student Search</h2>

      <div className="card p-4 shadow-sm">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className="list-group">
          {filtered.map((name, index) => (
            <li key={index} className="list-group-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task9;
