import axios from "axios"
import React, { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext)

  const deleteWorkout = async () => {
    try {
      const response = await axios.delete(`api/workouts/${workout._id}`)
      if (response.status === 200) {
        dispatch({ type: "DELETE_WORKOUT", payload: response.data })
      }
    } catch (error) {
      console.error("Error deleting workout:", error)
    }
  }

  return (
    <div className="workout-details">
      <h3>{workout.title}</h3>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{new Date(workout.createdAt).toLocaleDateString()}</p>
      <button onClick={deleteWorkout}>Delete Workout</button>
    </div>
  )
}

export default WorkoutDetails
