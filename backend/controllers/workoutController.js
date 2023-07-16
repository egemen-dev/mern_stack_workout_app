const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
const fillOutFields = "Please fill out all fields!";
const noWorkout = "No workout found with this id!";

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET one workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: noWorkout });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ message: noWorkout });
  }

  res.status(200).json(workout);
};

// POST one workout
const createWorkout = async (req, res) => {
  const { type, title, reps, sets, weight, distance, duration, completed } = req.body;

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
    const workout = await Workout.create({ ...req.body });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE one workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: noWorkout });
  }

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });
  res.status(200).json(workout);

  if (!workout) {
    return res.status(404).json({ message: noWorkout });
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
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
