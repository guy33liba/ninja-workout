import axios from "axios"
import React, { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
const Home = () => {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    const fetchWorkouts = async () => {
      const { data } = await axios.get("/api/workouts")
      if (data) {
        setWorkouts(data)
      }
    }
    fetchWorkouts()
  }, [])
  return (
    <div>
      <div className="home">
        <div className="workouts">
          {workouts &&
            workouts
              .sort((a, b) => b.length - a.length)
              .map((workout) => (
                <p key={workout._id}>
                  <WorkoutDetails key={workout._id} workout={workout} />
                </p>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Home
