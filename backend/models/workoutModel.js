const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    type: {
      type: String,
      enum: ["cardio", "lifting", "stretching", "cycling", "running", "walking"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      default: 1,
      required: function () {
        return this.type === "lifting";
      },
    },
    sets: {
      type: Number,
      default: 1,
      required: true,
    },
    weight: {
      type: Number,
      required: function () {
        return this.type === "lifting";
      },
    },
    distance: {
      type: Number,
      required: function () {
        return (
          this.type === "cycling" || this.type === "running" || this.type === "walking"
        );
      },
    },
    duration: {
      type: Number,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
