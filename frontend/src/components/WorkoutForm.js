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

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.log("User is not logged in and can not use the form.");
      return;
    }

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
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
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
    <form
      className="card w-96 bg-base-100 shadow-xl border border-base-200 my-8 flex flex-col justify-start items-center p-4 gap-3"
      onSubmit={handleSubmit}
    >
      <h3 className="card-title">Workout</h3>

      <label className="label">Completed:</label>
      <select
        className="select select-success w-full max-w-xs"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="cardio">Cardio</option>
        <option value="lifting">Lifting</option>
        <option value="stretching">Stretching</option>
        <option value="cycling">Cycling</option>
        <option value="running">Running</option>
        <option value="walking">Walking</option>
      </select>

      <label className="label">Title:</label>
      <input
        type="text"
        placeholder="e.g. Bench Press"
        className="input input-bordered w-full max-w-xs "
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
      <div className="w-full flex justify-center pt-6">
        <button type="submit" className="btn btn-outline btn-wide btn-success w-full">
          success
        </button>
      </div>
    </form>
  );
};

export default WorkoutForm;
