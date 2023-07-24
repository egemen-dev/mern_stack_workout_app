const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");
const express = require("express");
const router = express.Router();

// Check if user is authorized for all routes
router.use(requireAuth);

// GET all workouts
router.get("/", getWorkouts);

// POST one workout
router.post("/", createWorkout);

// DELETE one workout
router.delete("/:id", deleteWorkout);

module.exports = router;
