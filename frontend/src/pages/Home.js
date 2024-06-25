import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { WorkoutContext } from "../context/WorkoutContext"
const Home = () => {
  const { workouts, dispatch } = useContext(WorkoutContext)

  // const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    const fetchWorkouts = async () => {
      const { data } = await axios.get("/api/workouts")
      if (data) {
        // setWorkouts(data)
        dispatch({ type: "SET_WORKOUTS", payload: data })
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
        <div>
          <WorkoutForm />
        </div>
      </div>
    </div>
  )
}

export default Home
