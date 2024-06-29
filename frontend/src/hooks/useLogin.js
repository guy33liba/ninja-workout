import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await axios.post("/api/user/login", { email, password })
      console.log(data)
      localStorage.setItem("user", JSON.stringify(data))

      dispatch({ type: "LOGIN", payload: data })
      setIsLoading(false)
    } catch (error) {
      setError(error.response.data.error)
      // console.log(error)
    }
  }

  return { login, isLoading, error }
}
