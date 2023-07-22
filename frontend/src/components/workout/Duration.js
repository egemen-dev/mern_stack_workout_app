import React from "react";

const Duration = ({ workoutDuration }) => {
  return (
    <>
      <label>
        Duration: <strong> {workoutDuration}</strong>
      </label>
      <progress
        className="progress progress-success w-72"
        value={workoutDuration}
        max="30"
      ></progress>
    </>
  );
};

export default Duration;
