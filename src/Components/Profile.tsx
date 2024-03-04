import React from "react";

type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine: boolean;
};

const Profile: React.FC<ProfileProps> = ({
  name,
  email,
  isActive,
  singleLine,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{name}</h3>

      {!singleLine && <p>Email: {email}</p>}
      {!singleLine && <p>Active: {isActive ? "Yes" : "No"}</p>}
    </div>
  );
};

export default Profile;
