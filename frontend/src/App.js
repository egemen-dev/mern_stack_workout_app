import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import checkLogin from "./hooks/useCheckLogin";

// TODO:
// 1. Register a new user and save the token in localStorage - DONE
// 2. Prevent logged in users from accessing the login and register pages - DONE
// 3. Login a user and save the token in localStorage - WIP
// 4. Logout a user and remove the token from localStorage - WIP

function App() {
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    checkLogin({ setUser });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} />
        <p>{user && `${user.email} logged in`}</p>
        <div className="pages">
          <Routes>
            <Route path="/login" element={<Login />} user={user} />
            <Route path="/register" element={<Register />} user={user} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
