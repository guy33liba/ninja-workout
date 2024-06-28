import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    // const response = await fetch("/api/user/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // })
    // const json = await response.json()
    // console.log(response)
    // if (!response.ok) {
    //   setIsLoading(false)
    //   setError(json.error)
    // }
    // if (response.ok) {
    //   // save the user to local storage
    //   localStorage.setItem("user", JSON.stringify(json))

    //   // update the auth context
    //   dispatch({ type: "LOGIN", payload: json })

    //   // update loading state
    //   setIsLoading(false)
    // }
    try {
      const { data } = await axios.post("/api/user/signup", { email, password })
      console.log(data)
      localStorage.setItem("user", JSON.stringify(data))
      dispatch({ type: "LOGIN", payload: data })
      setIsLoading(false)
    } catch (error) {
      setError(error.response.data.error)
      // console.log(error)
    }
  }

  return { signup, isLoading, error }
}
