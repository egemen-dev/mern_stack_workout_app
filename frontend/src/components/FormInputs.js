import React from "react";

const FormInputs = ({
  type,
  duration,
  setDuration,
  distance,
  setDistance,
  reps,
  setReps,
  sets,
  setSets,
  weight,
  setWeight,
}) => {
  switch (type) {
    case "cardio":
      return (
        <>
          <label>Duration (min):</label>
          <input
            type="number"
            value={duration}
            min={0}
            onChange={(e) => setDuration(e.target.value)}
          />
        </>
      );
    case "lifting":
      return (
        <>
          <label>Reps:</label>
          <input
            type="number"
            value={reps}
            min={0}
            onChange={(e) => setReps(e.target.value)}
          />

          <label>Sets:</label>
          <input
            type="number"
            value={sets}
            min={0}
            onChange={(e) => setSets(e.target.value)}
          />

          <label>
            Weight <small>(kg)</small>:
          </label>
          <input
            type="number"
            value={weight}
            min={0}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label>Duration (min):</label>
          <input
            type="number"
            value={duration}
            min={0}
            onChange={(e) => setDuration(e.target.value)}
          />
        </>
      );
    case "stretching":
      return (
        <label>
          Duration (min):
          <input
            type="number"
            value={duration}
            min={0}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
      );
    case "cycling":
    case "running":
    case "walking":
      return (
        <>
          <label>Distance (km):</label>
          <input
            type="number"
            value={distance}
            min={0}
            onChange={(e) => setDistance(e.target.value)}
          />

          <label>Duration (min):</label>
          <input
            type="number"
            value={duration}
            min={0}
            onChange={(e) => setDuration(e.target.value)}
          />
        </>
      );
    default:
      return null;
  }
};

export default FormInputs;
