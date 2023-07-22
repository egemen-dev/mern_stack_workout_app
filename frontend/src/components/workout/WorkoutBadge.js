import React from "react";

const WorkoutBadge = ({ workoutType }) => {
  switch (workoutType) {
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

export default WorkoutBadge;
