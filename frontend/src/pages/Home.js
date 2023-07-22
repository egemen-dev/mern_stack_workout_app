import React from "react";
import { useEffect, useState } from "react";
import Workout from "../components/Workout";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [flash, setFlash] = useState(null);

  const setNewWorkouts = (newWorkouts) => {
    setWorkouts(newWorkouts);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchWorkouts = async () => {
    if (!user) {
      console.log("User is not logged in.");
      return;
    }

    const response = await fetch("/api/workouts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {flash && <p className="error">{flash}</p>}
      <div className="col-span-1 flex flex-col justify-start items-center">
        <WorkoutForm
          workouts={workouts}
          setNewWorkouts={setNewWorkouts}
          setFlashMessage={setFlash}
        />
      </div>
      <div className="col-span-2 flex flex-col justify-start items-center">
        {workouts &&
          workouts.map((workout) => (
            <Workout
              workout={workout}
              key={workout._id}
              workouts={workouts}
              setNewWorkouts={setNewWorkouts}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
