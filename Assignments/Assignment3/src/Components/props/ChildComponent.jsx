import React from "react";

function ChildComponent({ showAlert }) {
  return (
    <div className="card p-3 shadow-sm">
      <h4>Child Component</h4>
      <button className="btn btn-primary" onClick={showAlert}>
        Click Me
      </button>
    </div>
  );
}

export default ChildComponent;
