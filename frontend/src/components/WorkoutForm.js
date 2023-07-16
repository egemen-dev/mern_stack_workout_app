import React from "react";
import { useState } from "react";
import FormInputs from "./FormInputs";

const WorkoutForm = ({ workouts, setNewWorkouts, setFlashMessage }) => {
  const [type, setType] = useState("cardio");
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);
  const [weight, setWeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      type,
      title,
      reps,
      sets,
      weight,
      distance,
      duration,
      completed,
    };

    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout),
    });

    const json = await response.json();

    if (response.ok) {
      console.log("Workout successfully created!");
      setTitle("");
      setReps(0);
      setSets(0);
      setWeight(0);
      setDistance(0);
      setDuration(0);
      setCompleted(false);
      setFlashMessage(null);
      setNewWorkouts([json, ...workouts]);
      console.log(workouts, "workouts");
      console.log(json, "json");
    } else {
      console.log(json);
      setFlashMessage(json.error);
      console.log("Workout failed to create.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="cardio">Cardio</option>
        <option value="lifting">Lifting</option>
        <option value="stretching">Stretching</option>
        <option value="cycling">Cycling</option>
        <option value="running">Running</option>
        <option value="walking">Walking</option>
      </select>

      <label>Title:</label>
      <input
        type="text"
        placeholder="e.g. Bench Press"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* This component will render the appropriate input fields based on the type of workout and rerender when the type changes */}
      {console.log(type)}
      {type &&
        FormInputs({
          type,
          reps,
          setReps,
          sets,
          setSets,
          weight,
          setWeight,
          distance,
          setDistance,
          duration,
          setDuration,
        })}

      <label>Completed:</label>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />

      <div className="button-container">
        <button type="submit">Add Workout</button>
      </div>
    </form>
  );
};

export default WorkoutForm;
