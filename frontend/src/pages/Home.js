import axios from "axios"
import React, { useContext, useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { WorkoutContext } from "../context/WorkoutContext"
import { useAuthContext } from "../hooks/useAuthContext"
const Home = () => {
  const { workouts, dispatch } = useContext(WorkoutContext)
  const { user } = useAuthContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const { data } = await axios.get("/api/workouts", {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      })

      if (data) {
        dispatch({ type: "SET_WORKOUTS", payload: data })
      }
    }
    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])
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
