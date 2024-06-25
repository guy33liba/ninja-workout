import express from "express"

export const workoutRoute = express.Router()
workoutRoute.get("/", (req, res) => {
  res.json({ mssg: "Get All Workout" })
})
workoutRoute.get("/:id", (req, res) => {
  res.json({ mssg: "Get single Workout" })
})
workoutRoute.post("/", (req, res) => {
  res.json({ mssg: "post single Workout" })
})
workoutRoute.delete("/:id", (req, res) => {
  res.json({ mssg: "delete  Workout" })
})
workoutRoute.put("/:id", (req, res) => {
  res.json({ mssg: "update  Workout" })
})
