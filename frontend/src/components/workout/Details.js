import React from "react";
import Duration from "./Duration";

const Details = ({ workout }) => {
  return (
    <>
      {workout.type === "cardio" && <Duration workoutDuration={workout.duration} />}
      {workout.type === "stretching" && <Duration workoutDuration={workout.duration} />}
      {(workout.type === "cycling" ||
        workout.type === "running" ||
        workout.type === "walking") && (
        <>
          <label>
            Distance: <strong>{workout.distance} km</strong>
          </label>
          <progress
            className="progress progress-success w-full"
            value={workout.distance}
            max="10"
          ></progress>
          <Duration workoutDuration={workout.duration} />
        </>
      )}
      {workout.type === "lifting" && (
        <>
          <label>
            Reps: <strong>{workout.reps}</strong>
          </label>
          <progress
            className="progress progress-success w-full"
            value={workout.reps}
            max="12"
          ></progress>
          <label>
            Sets: <strong>{workout.sets}</strong>
          </label>
          <progress
            className="progress progress-success w-full"
            value={workout.sets}
            max="3"
          ></progress>
          <label>
            Weight: <strong>{workout.weight} kg</strong>
          </label>
          <progress
            className="progress progress-success w-full"
            value={workout.weight}
            max="36"
          ></progress>
        </>
      )}
    </>
  );
};

export default Details;
