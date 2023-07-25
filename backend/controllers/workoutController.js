const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
const fillOutFields = "Please fill out all fields!";
const noWorkout = "No workout found with this id!";

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({ user_id: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// POST one workout
const createWorkout = async (req, res) => {
  const { type, title, reps, sets, weight, distance, duration } = req.body;

  // check empty fields based on workout type
  switch (type) {
    case "cardio":
    case "stretching":
      if (!title || !duration) {
        return res.status(400).json({ error: fillOutFields });
      }
      break;
    case "lifting":
      if (!title || !reps || !sets || !weight || !duration) {
        return res.status(400).json({ error: fillOutFields });
      }
      break;
    case "cycling":
    case "running":
    case "walking":
      if (!title || !distance || !duration) {
        return res.status(400).json({ error: fillOutFields });
      }
      break;
    default:
      return res.status(400).json({ error: fillOutFields });
  }

  try {
    const workout = await Workout.create({ user_id: req.user._id, ...req.body });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE one workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: noWorkout });
  }

  const workout = await Workout.findByIdAndRemove({ _id: id });

  if (!workout) {
    return res.status(404).json({ message: noWorkout });
  }

  res.json({ message: "Workout deleted successfully." });
};

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
};
