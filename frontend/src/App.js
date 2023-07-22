import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages and Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";

// TODO:
// 1. Register a new user and save the token in localStorage - DONE
// 2. Prevent logged in users from accessing the login and register pages - DONE
// 3. Login a user and save the token in localStorage - DONE
// 4. Logout a user and remove the token from localStorage - DONE

function App() {
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} />
        <h1 className="text-3xl font-bold underline">Hello world sadasd!</h1>
        <p>{user && `${user.email} logged in`}</p>
        <div className="pages">
          <Routes>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
              user={user}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
              user={user}
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={!user ? <Navigate to="/login" /> : <Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
