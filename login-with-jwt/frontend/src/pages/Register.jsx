import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-amber-500 rounded-xl shadow-xl ">
        <h1 className="text-center text-2xl font-bold text-white py-2">
          Register 
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

export default Register;
