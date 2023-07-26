import React from "react";
import { useEffect, useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
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

  const removeFlash = () => {
    setTimeout(() => {
      setFlash(null);
    }, 5000);

    return flash;
  };

  // Fix logout bug - DONE
  // Better error style - DONE
  // Remove console logs
  // Fix login register from style bug
  // Add user name above form

  return (
    <>
      <div className="w-full flex justify-center">
        {flash && <div className="text-info pt-3">{removeFlash()}</div>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 my-6">
        <div className="col-span-2 flex flex-col lg:justify-start items-center p-4 lg:pl-40 lg:pr-8">
          <WorkoutForm
            workouts={workouts}
            setNewWorkouts={setNewWorkouts}
            setFlashMessage={setFlash}
          />
        </div>
        <div className="col-span-3 flex flex-col lg:justify-start items-center p-4 lg:pr-40 lg:pl-8">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutCard
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
