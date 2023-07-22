import React from "react";

const Duration = ({ workoutDuration }) => {
  return (
    <>
      <label>
        Duration: <strong> {workoutDuration} mins</strong>
      </label>
      <progress
        className="progress progress-success w-full"
        value={workoutDuration}
        max="30"
      ></progress>
    </>
  );
};

export default Duration;
