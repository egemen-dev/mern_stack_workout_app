import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutTemplate = ({ workout, workouts, setNewWorkouts }) => {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this workout?")) return;

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

  const renderExerciseTypeBadge = () => {
    switch (workout.type) {
      case "cardio":
        return <div className="badge badge-primary badge-sm">cardio</div>;
      case "lifting":
        return <div className="badge badge-secondary badge-sm">lifting</div>;
      case "stretching":
        return <div className="badge badge-accent badge-sm">stretching</div>;
      case "cycling":
        return <div className="badge badge badge-sm">cycling</div>;
      case "running":
        return <div className="badge badge-neutral badge-sm">running</div>;
      case "walking":
        return <div className="badge badge-ghost badge-sm">walking</div>;
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
    <div className="card w-96 bg-base-100 shadow-xl border border-base-200 my-8">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="card-title">
            {workout.title}
            {renderExerciseTypeBadge()}
          </div>
          <div className="flex justify-between space-x-2">
            <button className="btn btn-outline btn-error btn-xs" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        {renderExerciseDetails()}
        <p>
          <em className="flex justify-end">
            {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
          </em>
        </p>
      </div>
    </div>
  );
};

export default WorkoutTemplate;
