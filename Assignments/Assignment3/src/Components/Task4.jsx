import React, { useState } from "react";

function Task4() {
  const [username, setUsername] = useState("");

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Live Username Display</h2>

      <div className="card p-4 shadow-sm">
        <label className="form-label fw-bold">Username:</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Type your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h5 className="mt-3">
          Live Output: <span className="text-primary">{username}</span>
        </h5>
      </div>
    </div>
  );
}

export default Task4;
