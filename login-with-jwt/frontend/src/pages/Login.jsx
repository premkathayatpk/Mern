import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        alert("User logged in successfully!");
        navigate("/");
      } else {
        alert("Failed to log in user: " + data.message);
      }
    } catch (error) {
      console.error("Error logging in user:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-amber-500 rounded-xl shadow-xl ">
        <h1 className="text-center text-2xl font-bold text-white py-2">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 bg-white p-4 rounded-b-xl  w-full"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border py-1 rounded-md px-4"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border py-1 rounded-md px-4"
          />
          <button
            type="submit"
            className="bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
