import React, { useState } from "react";

export default function Task15() {
  const [profile, setProfile] = useState({
    name: "Arun",
    email: "arun@example.com",
    phone: "9876543210"
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Task 15 – Edit Profile</h3>
      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input className="form-control" name="name" value={profile.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input className="form-control" name="email" value={profile.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Phone</label>
          <input className="form-control" name="phone" value={profile.phone} onChange={handleChange} />
        </div>

        <div className="alert alert-success mt-3">
          <strong>Updated Profile:</strong><br />
          Name: {profile.name}<br />
          Email: {profile.email}<br />
          Phone: {profile.phone}
        </div>
      </div>
    </div>
  );
}
