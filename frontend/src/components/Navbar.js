import React from "react"
import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>

        <nav>
          {user !== null && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
        </nav>
        <div className="loginSignup">
          <Link to="/login">
            <h1>Log in</h1>
          </Link>
          <Link to="/signup">
            <h1>Sign Up</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
