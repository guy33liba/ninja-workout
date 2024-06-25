import React from "react"

const WorkoutDetails = ({ workout }) => {
  return (
    <div>
      <div className="workout-details">
        <h3>{workout.title}</h3>
        <p>
          <strong>Load (kg){workout.load}</strong>
        </p>
        <p>
          <strong>reps (kg){workout.reps}</strong>
        </p>
        <p>{workout.createdAt}</p>
      </div>
    </div>
  )
}

export default WorkoutDetails
