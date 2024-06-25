import React, { createContext, useReducer } from "react"

export const WorkoutContext = createContext()
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workout: action.payload }
    case "CREATE_WORKOUT":
      return { workout: action.payload, ...state.workouts }
    case "CLEAR_WORKOUT":
      return { ...state, workout: null }
    default:
      return state
  }
}
const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, { workouts: null })
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  )
}

export default WorkoutContext
