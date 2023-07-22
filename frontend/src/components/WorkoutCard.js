import React from "react";
import WorkoutBadge from "./workout/WorkoutBadge";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Details from "./workout/Details";

const WorkoutCard = ({ workout, workouts, setNewWorkouts }) => {
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

  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-base-200 mb-4 w-full">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="card-title">
            {workout.title}
            <WorkoutBadge workoutType={workout.type} />
          </div>
          <div className="flex justify-between space-x-2">
            <button className="btn btn-outline btn-error btn-xs" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        <Details workout={workout} />
        <div>
          <p className="flex justify-space-between text-sm pt-2.5">
            {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
