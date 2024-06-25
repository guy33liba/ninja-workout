import Workout from "../model/workoutSchema.js"

//get all workouts
const getWorkouts = async (req, res) => {
  const workouts = new Workout.find({}).sort({ createAt: -1 })
  res.status(200).send(workouts)
}
//get single workout
const getworkout = async (req, res) => {
  const { id } = req.params
  const workout = await new Workout.findById(id)
  if (!workout) {
    return res.status(404).send({ errro: "no such workout" })
  }
}
//create new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body
  try {
    const workout = new Workout({ title, reps, load })
    const newWorkout = await workout.save()
    res.status(201).json(newWorkout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
//delete existing workout

//update existing workout
export { createWorkout, getWorkouts }
