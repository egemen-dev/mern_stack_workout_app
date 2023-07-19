import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1>Workout Tracker</h1>
        </Link>
        <nav>
          <div>
            {!user && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
            {user && (
              <Link to="/logout" onClick={() => localStorage.removeItem("user")}>
                Logout
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
