const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: {
    type: String,
    trim: true,
    required: "Enter the exercise type"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter the exercise name"
  },
  duration: {
    type: Number,
    required: "Enter the exercise duration in minutes"
  },
  distance: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  },
  weight: {
    type: Number
  }
});

//
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
