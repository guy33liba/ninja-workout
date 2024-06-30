import { BsFillTrashFill } from "react-icons/bs"
import axios from "axios"
import React, { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"
import { useAuthContext } from "../hooks/useAuthContext"
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext)
  const { user } = useAuthContext()
  const deleteWorkout = async () => {
    try {
      if (!user) {
        return
      }
      const response = await axios.delete(`api/workouts/${workout._id}`, {
        headers: { authorization: `Bearer ${user.token}` },
      })
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
          <strong>Load (kg): {workout.load}</strong>
        </p>
        <p>
          <strong>Reps: </strong>
          {workout.reps}
        </p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      </div>
      <div className="deleteIcon">
        <button onClick={deleteWorkout}>
          <BsFillTrashFill style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px" }} />
        </button>
      </div>
    </div>
  )
}

export default WorkoutDetails
