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
    <div>
      <form onSubmit={handleSubmit} className="signup">
        <h3>Register</h3>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button disabled={loading} type="submit">
          Register
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
