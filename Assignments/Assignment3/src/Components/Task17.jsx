import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Task17() {
  const [user, setUser] = useState({ firstName: "", lastName: "", age: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/users/1")
      .then(res => setUser(res.data))
      .catch(() => setMessage("Error fetching user"));
  }, []);

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("https://dummyjson.com/users/1", user);
      setMessage("User Updated!");
    } catch {
      setMessage("Update failed!");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Task 17 – Edit User</h3>
      <form className="card p-4 shadow-sm" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label fw-bold">First Name</label>
          <input name="firstName" className="form-control" value={user.firstName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Last Name</label>
          <input name="lastName" className="form-control" value={user.lastName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Age</label>
          <input name="age" className="form-control" value={user.age} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Update User</button>
      </form>

      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}
