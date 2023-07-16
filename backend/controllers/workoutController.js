const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET one workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No workout found with this id!" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ message: "No workout found with this id!" });
  }

  res.status(200).json(workout);
};

// POST one workout
const createWorkout = async (req, res) => {
  const { title, reps, sets, weight } = req.body;

  try {
    const workout = await Workout.create({ title, reps, sets, weight });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE one workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No workout found with this id!" });
  }

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });
  res.status(200).json(workout);

  if (!workout) {
    return res.status(404).json({ message: "No workout found with this id!" });
  }
};

// DELETE one workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No workout found with this id!" });
  }

  const workout = await Workout.findByIdAndRemove({ _id: id });

  if (!workout) {
    return res.status(404).json({ message: "No workout found with this id!" });
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
