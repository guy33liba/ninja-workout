import Workout from "../model/workoutSchema.js"
import mongoose from "mongoose"
//get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createAt: -1 })
  res.status(200).send(workouts)
}
//get single workout

const getworkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "Workout not found" })
  }
  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).send({ errro: "no such workout" })
  }
  res.status(200).send(workout)
}
//
//
//

//create new workout

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body
  try {
    const workout = await Workout({ title, reps, load })
    const newWorkout = await workout.save()
    res.status(201).json(newWorkout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
//
//
//

//delete existing workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  const workout = await Workout.findOneAndDelete({ _id: id })
  if (!workout) {
    return res.status(404).send({ errro: "no such workout" })
  }
  res.status(201).send(workout)
}
//
//
//

//update existing workout
const updateWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "Workout not found" })
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },

    { ...req.body },
  )
  if (!workout) {
    return res.status(404).send({ errro: "no such workout" })
  }
  res.status(201).send(workout)
}
//
//
export { createWorkout, getWorkouts, getworkout }
