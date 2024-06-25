import express from "express"
import {
  createWorkout,
  getWorkouts,
  getworkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js"

const workoutRoute = express.Router()
workoutRoute.get("/", getWorkouts)
workoutRoute.get("/:id", getworkout)

workoutRoute.post("/", createWorkout)
workoutRoute.delete("/:id", deleteWorkout)

workoutRoute.patch("/:id", updateWorkout)
export default workoutRoute
