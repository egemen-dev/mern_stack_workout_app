import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1>Workout Tracker</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
