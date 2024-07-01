import express from "express"
import {
  createWorkout,
  getWorkouts,
  getworkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js"
import requireAuth from "../middleware/requireAuth.js"
const workoutRoute = express.Router()

workoutRoute.use(requireAuth)

workoutRoute.get("/", getWorkouts)
workoutRoute.get("/:id", getworkout)

workoutRoute.post("/", createWorkout)
workoutRoute.delete("/:id", deleteWorkout)

workoutRoute.patch("/:id", updateWorkout)
export default workoutRoute
