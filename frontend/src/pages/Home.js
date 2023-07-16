import React from "react";
import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [flash, setFlash] = useState(null);

  const setNewWorkouts = (newWorkouts) => {
    setWorkouts(newWorkouts);
  };

  const fetchWorkouts = async () => {
    const response = await fetch("/api/workouts");
    const json = await response.json();

    console.log(json);

    if (response.ok) {
      setWorkouts(json);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <>
      {flash && <p className="error">{flash}</p>}
      <div className="home">
        <WorkoutForm
          workouts={workouts}
          setNewWorkouts={setNewWorkouts}
          setFlashMessage={setFlash}
        />
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails
                workout={workout}
                key={workout._id}
                workouts={workouts}
                setNewWorkouts={setNewWorkouts}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;