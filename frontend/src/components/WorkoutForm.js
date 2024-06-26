import axios from "axios"
import React, { useContext, useState } from "react"
import { WorkoutContext } from "../context/WorkoutContext"
const WorkoutForm = () => {
  const { dispatch } = useContext(WorkoutContext)
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")
  const [error, setError] = useState("")
  const [emptyFields, setEmptyFields] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null) // Reset error state before making the request
    const workout = { title, load, reps }
    try {
      const response = await fetch("/api/workouts", {
        method: "POST",
        workout,
        headers: { "content-type": "application/json" },
      })
      const json = await response.json()
      if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
      }

      if (response.ok) {
        // Clear form inputs
        setTitle("")
        setReps("")
        setLoad("")
        setEmptyFields([])
        dispatch({ type: "CREATE_WORKOUT", payload: json })
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message)
      console.error("Error submitting workout:", error)
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
          className={emptyFields.includes("title") && title === "" ? "error" : ""}
        />

        <label>Load (in Kg)</label>
        <input
          type="number"
          value={load}
          placeholder="Load"
          onChange={(e) => setLoad(e.target.value)}
          className={emptyFields.includes("load") && load === "" ? "error" : ""}
        />

        <label>Reps</label>
        <input
          type="number"
          value={reps}
          placeholder="Reps"
          onChange={(e) => setReps(e.target.value)}
          className={emptyFields.includes("reps") && reps === "" ? "error" : ""}
        />

        <button type="submit">Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default WorkoutForm
