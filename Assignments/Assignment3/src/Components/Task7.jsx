import React from "react";
import ChildComponent from "./props/ChildComponent";

function Task7() {
  const showAlert = () => {
    alert("Hello! This alert came from the Parent Component.");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Parent → Child Function Passing</h2>

      <ChildComponent showAlert={showAlert} />
    </div>
  );
}

export default Task7;
