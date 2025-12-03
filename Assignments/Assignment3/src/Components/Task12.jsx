import React, { useState } from "react";

export default function Task12() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`container p-4 mt-4 ${dark ? "bg-dark text-white" : "bg-light"}`}>
      <h3 className="mb-3">Task 12 – Toggle Theme</h3>

      <button
        className="btn btn-primary"
        onClick={() => setDark(!dark)}
      >
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
