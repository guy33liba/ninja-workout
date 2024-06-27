import { authContext } from "../context/WorkoutContext"
import { useContext } from "react"

const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext)
  if (!context) {
    throw new Error("useWorkoutsContext must be used within a WorkoutProvider")
  }
  return context
}
export default useWorkoutsContext
