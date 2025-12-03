import React from "react";

function ProfileCard({ name, role, image }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm mb-4">
        <img src={image} className="card-img-top img-thumbnail" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
