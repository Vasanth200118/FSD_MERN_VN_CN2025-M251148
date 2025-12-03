import React, { useState } from "react";
import axios from "axios";

export default function Task16() {
  const [form, setForm] = useState({ title: "", body: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://dummyjson.com/posts/add", form);
      setMessage("Post Added!");
      setForm({ title: "", body: "" });
    } catch {
      setMessage("Error adding post!");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Task 16 – Axios POST</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">Title</label>
          <input name="title" className="form-control" value={form.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Body</label>
          <textarea name="body" className="form-control" rows="4" value={form.body} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>

      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}
