require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());
app.use("/api/workouts", workoutRoutes);

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend!" });
});

// connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port,", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
