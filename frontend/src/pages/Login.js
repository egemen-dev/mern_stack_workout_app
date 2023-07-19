import React from "react";
import { useState, useEffect } from "react";

const Login = ({ user }) => {
  // prevent logged in users from accessing the login page
  useEffect(() => {
    if (user !== null) {
      window.location.replace("/");
    }
  }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <h3>Login</h3>
        <div>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
