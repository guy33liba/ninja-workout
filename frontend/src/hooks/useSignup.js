import { useState } from "react"
import useAuthContext from "./useWorkoutsContext"
import axios from "axios"

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext
  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await axios.post("/api/user/signup")
    console.log(response)
    try {
      localStorage.setItem("token", response.data.token)
      dispatch({ type: "LOGIN", payload: response.data })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError("Failed to signup. Please try again.")
    }
  }
  return { signup, isLoading, error }
}
