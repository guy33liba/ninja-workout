import express from "express"
import { createWorkout, getWorkouts, getworkout } from "../controllers/workoutController.js"

const workoutRoute = express.Router()
workoutRoute.get("/", getWorkouts)
workoutRoute.get("/:id", getworkout)

workoutRoute.post("/", createWorkout)
workoutRoute.delete("/:id", (req, res) => {
  res.json({ mssg: "delete  Workout" })
})

workoutRoute.patch("/:id", (req, res) => {
  res.json({ mssg: "update  Workout" })
})
export default workoutRoute
