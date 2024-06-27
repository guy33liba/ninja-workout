import Workout from "../model/workoutSchema.js"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
//get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })
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

  let emptyFields = []
  if (!title) {
    emptyFields.push("title")
  }
  if (!load) {
    emptyFields.push("load")
  }
  if (!reps) {
    emptyFields.push("reps")
  }
  if (emptyFields.length > 0) {
    return res.status(400).send({ error: "Please fill in all the fields", emptyFields })
  }
  try {
    const workout = new Workout({ title, reps, load })
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

  try {
    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
      return res.status(404).json({ error: "No such workout" })
    }

    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
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
export { createWorkout, getWorkouts, getworkout, deleteWorkout, updateWorkout }
