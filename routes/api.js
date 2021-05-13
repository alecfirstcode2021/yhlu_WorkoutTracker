const express = require("express");
const router = require("express").Router();
const Workout = require("../models/workout.js");

//get stats
router.get("/api/workouts/range", ({body}, res) => {
  Workout.find({})
    .then(dbWorkout => {
      // console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//get all workouts
router.get("/api/workouts", ({body}, res) => {
  Workout.find({})
    .then(dbWorkout => {
      // res.json(dbWorkout);
      res.send(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

  // create a new workout
router.post("/api/workouts", ({body}, res) => {
  // Workout.create({})
  Workout.create({body})
    .then(dbTransaction => {
      // res.json(dbWorkout);
      res.send(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  // add a id 20210513
  Workout.findByIdAndUpdate(id,
    { $push: { exercises: req.body } }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;
