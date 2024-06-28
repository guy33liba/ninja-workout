import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
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
