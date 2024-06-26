import { BsFillTrashFill } from "react-icons/bs"
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
      <div>
        <h3>{workout.title}</h3>
        <p>
          <strong style={{ display: "flex" }}>Load (kg): {workout.load}</strong>
        </p>
        <p>
          <strong>Reps: </strong>
          {workout.reps}
        </p>
        <p>{new Date(workout.createdAt).toLocaleDateString()}</p>
      </div>
      <div className="deleteIcon">
        <button onClick={deleteWorkout}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  )
}

export default WorkoutDetails
