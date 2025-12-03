import React from "react";
import ProfileCard from "./props/Profilecard";

function Task3() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Team Profiles</h2>
      <div className="row">
        <ProfileCard
          name="Arun Kumar"
          role="Frontend Developer"
          image="https://i.pinimg.com/474x/4a/5c/2f/4a5c2f2a828314d79432bb91afeb3ef3.jpg"
        />

        <ProfileCard
          name="Deva"
          role="Backend Developer"
          image="https://i.pinimg.com/474x/4a/5c/2f/4a5c2f2a828314d79432bb91afeb3ef3.jpg"
        />

        <ProfileCard
          name="Karthik Raja"
          role="UI/UX Designer"
          image="https://i.pinimg.com/474x/4a/5c/2f/4a5c2f2a828314d79432bb91afeb3ef3.jpg"
        />
      </div>
    </div>
  );
}

export default Task3;
