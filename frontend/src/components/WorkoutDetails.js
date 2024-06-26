import axios from "axios"
import React, { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext)

  const deleteWorkout = async () => {
    try {
      {
        dispatch({
          type: "DELETE_WORKOUT",
          payload: workout._id,
        })
      }
    } catch (error) {
      console.error("Error deleting workout:", error)
      // Optionally, set an error state or show user feedback here
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
