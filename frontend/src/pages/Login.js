import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login(email, password);

    if (result) {
      window.location.href = "/";
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="card p-6 flex flex-col justify-center items-center gap-3 w-full max-w-md shadow-2xl"
      >
        <h3 className="card-title border-b-2 pb-3">Login</h3>
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
            Login
          </button>
          <a href="/register" className="btn btn-outline w-full">
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
