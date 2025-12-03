import React from "react";

function Task2() {
  const isLoggedIn = true; // change this to false to test

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm text-center">
        <h3 className={isLoggedIn ? "text-success" : "text-danger"}>
          {isLoggedIn ? "Welcome back!" : "Please log in"}
        </h3>
      </div>
    </div>
  );
}

export default Task2;