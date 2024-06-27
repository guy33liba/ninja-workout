import { WorkoutContext } from "../context/WorkoutContext"
import { useContext } from "react"

const useAuthContext = () => {
  const context = useContext(WorkoutContext)
  if (!context) {
    throw new Error("useWorkoutsContext must be used within a AuthContextProvider")
  }
  return context
}
export default useAuthContext
