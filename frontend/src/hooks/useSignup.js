import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext
  const signup = async () => {
    setIsLoading(true)
    setError(null)

    const response = await axios.post("/api/user/signup")
    try {
      console.log(response)

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
