const WorkoutTemplate = ({ workout }) => {
  return (
    <div className="workout-details">
      <h3>{workout.title}</h3>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Sets: </strong>
        {workout.sets}
      </p>
      <p>
        <strong>Load (kg):</strong>
        {workout.weight}
      </p>
      <p>
        <small>{workout.createdAt}</small>
      </p>
    </div>
  );
};

export default WorkoutTemplate;
