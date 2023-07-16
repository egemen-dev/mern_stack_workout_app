import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutTemplate = ({ workout, workouts, setNewWorkouts }) => {
  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Workout successfully deleted!");
      setNewWorkouts(
        workouts.filter((singleWorkout) => singleWorkout._id !== workout._id)
      );
    } else {
      console.log("Workout failed to delete.");
    }
  };

  const renderExerciseDetails = () => {
    switch (workout.type) {
      case "cardio":
        return (
          <>
            <p>
              Distance: <strong> {workout.distance}</strong>
            </p>
            <p>
              Duration: <strong> {workout.duration}</strong>
            </p>
          </>
        );
      case "lifting":
        return (
          <>
            <p>
              Reps: <strong>{workout.reps}</strong>
            </p>
            <p>
              Sets: <strong>{workout.sets}</strong>
            </p>
            <p>
              Weight: <strong>{workout.weight}</strong>
            </p>
            <p>
              Duration: <strong>{workout.duration}</strong>
            </p>
          </>
        );
      case "stretching":
        return (
          <p>
            Duration: <strong>{workout.duration}</strong>
          </p>
        );
      case "cycling":
      case "running":
      case "walking":
        return (
          <>
            <p>
              Distance: <strong>{workout.distance}</strong>
            </p>
            <p>
              Duration: <strong>{workout.duration}</strong>
            </p>
          </>
        );
    }
  };

  return (
    <div className="workout-details">
      <h3>{workout.title}</h3>
      {renderExerciseDetails()}
      <p className={workout.completed ? "completed" : "not-completed"}>
        <strong>{workout.completed ? "Completed" : "Not Completed"}</strong>
      </p>
      <p>
        <em>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</em>
      </p>
      <span className="delete" onClick={handleDelete}></span>
    </div>
  );
};

export default WorkoutTemplate;
