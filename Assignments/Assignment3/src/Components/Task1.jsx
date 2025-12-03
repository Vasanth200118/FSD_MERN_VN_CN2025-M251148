import React from "react";

function Task1() {
  const students = [
    { name: "Arun", dept: "CSE", year: "3rd Year" },
    { name: "Meena", dept: "ECE", year: "2nd Year" },
    { name: "Karthik", dept: "Mechanical", year: "4th Year" },
  ];

  return (
    <div className="container-fluid d-flex justify-content-center w-50 h-25 bg-secondary rounded-4 p-5">
      
      <div className="row">
        <h2 className="p-3 text-center text-white">Student List</h2>
        {students.map((student, index) => (
          <div className="col-12" key={index}>
            <div className="card shadow-sm mb-3 bg-dark">
              <div className="card-body">
                <h5 className="card-title text-white">{student.name}</h5>
                <p className="card-text text-white">Department: {student.dept}</p>
                <p className="card-text text-white">
                  <strong>{student.year}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Task1;
