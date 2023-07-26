import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages and Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
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
            <Route path="/" element={!user ? <Navigate to="/login" /> : <Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
