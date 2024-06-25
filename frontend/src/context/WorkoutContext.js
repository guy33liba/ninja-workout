import React, { createContext, useReducer } from "react"

export const WorkoutContext = createContext()

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { ...state, workouts: action.payload }
    case "CREATE_WORKOUT":
      return { ...state, workouts: [action.payload, ...state.workouts] }
    case "DELETE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.filter((workout) => workout._id !== action.payload),
      }
    case "CLEAR_WORKOUT":
      return { ...state, workouts: null }
    default:
      return state
  }
}

const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, { workouts: [] })

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  )
}

export default WorkoutContextProvider
