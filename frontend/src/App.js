import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/workouts" element={<Workouts />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
