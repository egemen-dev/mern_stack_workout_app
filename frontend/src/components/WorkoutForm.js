import { useState } from "react";

const WorkoutForm = ({ fetchWorkouts }) => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, reps, sets, weight };

    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout),
    });

    const json = await response.json();

    if (response.ok) {
      console.log("Workout successfully created!");
      setTitle("");
      setReps("");
      setSets("");
      setWeight("");
      setError(null);

      fetchWorkouts();
    } else {
      console.log(json);
      setError(json.error);
      console.log("Workout failed to create.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Title:</label>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Reps:</label>
      <input
        type="number"
        placeholder="Enter reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <label>Sets:</label>
      <input
        type="number"
        placeholder="Enter sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />

      <label>Weight:</label>
      <input
        type="number"
        placeholder="Enter weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button type="submit">Add Workout</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
