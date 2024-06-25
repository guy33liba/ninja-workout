import React, { useState } from "react"
import axios from "axios"
const Workout = () => {
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")

  const postData = async () => {
    const { data } = await axios.post("http://localhost:4000/api/workout", { title, reps, load })
    try {
      if (data) {
        setTitle(data.title)
        setReps(data.reps)
        setLoad(data.load)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        value={reps}
        placeholder="reps"
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type="number"
        value={load}
        placeholder="load"
        onChange={(e) => setLoad(e.target.value)}
      />
      <button onClick={postData}>load workout</button>
    </div>
  )
}

export default Workout
