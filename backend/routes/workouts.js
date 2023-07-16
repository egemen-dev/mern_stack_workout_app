const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const express = require("express");
const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET one workout
router.get("/:id", getWorkout);

// POST one workout
router.post("/", createWorkout);

// UPDATE one workout
router.patch("/:id", updateWorkout);

// DELETE one workout
router.delete("/:id", deleteWorkout);

module.exports = router;
