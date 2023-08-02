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
      <div className="flex-none px-6">
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Options</summary>
              <ul class="p-2 bg-base-100 z-50">
                {!user && (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
                {user && (
                  <li>
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </details>
          </li>
        </ul>
        <div className="flex gap-6"></div>
      </div>
    </div>
  );
};

export default Navbar;
