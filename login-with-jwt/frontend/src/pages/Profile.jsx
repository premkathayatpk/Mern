import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user, loading, logout, getMe } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  
  return (
    <div>
      <h1>Profile</h1>
      <div className="border p-4 rounded shadow w-full max-w-md mx-auto">
        <p>Email: {user.email}</p>
        <p>createdAt: {user.createdAt}</p>
        <p>updatedAt: {user.updatedAt}</p>
        <button
          onClick={() => {
            logout();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
