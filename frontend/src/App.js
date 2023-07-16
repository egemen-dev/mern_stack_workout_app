import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and Components
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Workout from "./pages/Workout";
import NewWorkout from "./pages/NewWorkout";
import EditWorkout from "./pages/EditWorkout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/workouts/:id" element={<Workout />} />
            <Route path="/workouts/new" element={<NewWorkout />} />
            <Route path="/workouts/:id/edit" element={<EditWorkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
