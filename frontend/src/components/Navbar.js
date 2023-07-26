import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    return <Navigate to="/login" />;
  };

  return (
    <div className="navbar bg-base-200 lg:px-48">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <h1>Workout Tracker</h1>
        </Link>
      </div>
      {user && <div>Welcome, {user.username}</div>}
      <div className="flex-none px-6">
        <div className="flex gap-6">
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          {user && (
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
