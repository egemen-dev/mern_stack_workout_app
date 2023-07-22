import React from "react";
import { useState } from "react";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await register(username, email, password);

    if (result) {
      window.location.href = "/";
    } else {
      setEmail("");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="card p-6 bg-base-200 border border-base-50 flex flex-col justify-center items-center gap-3 w-full max-w-md shadow-lg"
      >
        <h3 className="card-title">Register</h3>
        <label>Username</label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <label>Email Address</label>
        <input
          type="email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <label>Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading && <div className="text-info">Loading...</div>}
        {error && <div className="text-error">{error}</div>}
        <div className="flex justify-center items-center gap-3 pt-4">
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
          <a href="/login" className="btn btn-outline w-full">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
