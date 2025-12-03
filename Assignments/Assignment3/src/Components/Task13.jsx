import React, { useState } from "react";

export default function Task13() {
  const [text, setText] = useState("");

  return (
    <div className="container mt-4 p-4 bg-light border rounded">
      <h3 className="mb-3">Task 13 – Live Character Counter</h3>

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="alert alert-info">
        Character Count: <strong>{text.length}</strong>
      </div>
    </div>
  );
}
