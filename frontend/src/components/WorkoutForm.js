import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const WorkoutForm = () => {
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null) // Reset error state before making the request
    try {
      const { data } = await axios.post("/api/workouts", {
        title,
        reps,
        load,
      })

      if (data) {
        // Clear form inputs
        setTitle("")
        setReps("")
        setLoad("")
        navigate("/")
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
        />

        <label>Load (in Kg)</label>
        <input
          type="number"
          value={load}
          placeholder="Load"
          onChange={(e) => setLoad(e.target.value)}
        />

        <label>Reps</label>
        <input
          type="number"
          value={reps}
          placeholder="Reps"
          onChange={(e) => setReps(e.target.value)}
        />

        <button type="submit">Add Workout</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default WorkoutForm
