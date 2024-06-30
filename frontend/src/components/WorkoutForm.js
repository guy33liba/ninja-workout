import axios from "axios"
import React, { useContext, useState } from "react"
import { WorkoutContext } from "../context/WorkoutContext"
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutForm = () => {
  const { dispatch } = useContext(WorkoutContext)
  const { user } = useAuthContext()

  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")
  const [error, setError] = useState("")
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null) // Reset error state before making the request
    if (!user) {
      setError("You must be logged in")
      return
    }
    const workout = { title, load, reps }

    try {
      const response = await axios.post("/api/workouts", workout, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      console.log(response)
      dispatch({ type: "CREATE_WORKOUT", payload: response.data })
      setTitle("")
      setReps("")
      setLoad("")
      setEmptyFields([])
    } catch (err) {
      const {
        response: {
          data: { error, emptyFields },
        },
      } = err
      setEmptyFields(emptyFields)
      setError(error)
    }
  }

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add New Workout</h3>

        <label>Exercise Title</label>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className={emptyFields.includes("title") ? "error" : ""}
        />

        <label>Load (in Kg)</label>
        <input
          type="number"
          value={load}
          placeholder="Load"
          onChange={(e) => setLoad(e.target.value)}
          className={emptyFields.includes("load") ? "error" : ""}
        />

        <label>Reps</label>
        <input
          type="number"
          value={reps}
          placeholder="Reps"
          onChange={(e) => setReps(e.target.value)}
          className={emptyFields.includes("reps") ? "error" : ""}
        />

        <button type="submit">Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default WorkoutForm
