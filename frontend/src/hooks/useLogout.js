import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const logout = () => {
    localStorage.removeItem("user", null)
    dispatch({ type: "LOGOUT" })
  }
  return { logout }
}
