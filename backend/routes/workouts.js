import express from "express"
import { createWorkout, getWorkouts } from "../controllers/workoutController.js"

export const workoutRoute = express.Router()
workoutRoute.get("/", getWorkouts)
workoutRoute.get("/:id", getworkout)

workoutRoute.post("/", createWorkout)
workoutRoute.delete("/:id", (req, res) => {
  res.json({ mssg: "delete  Workout" })
})

workoutRoute.put("/:id", (req, res) => {
  res.json({ mssg: "update  Workout" })
})
