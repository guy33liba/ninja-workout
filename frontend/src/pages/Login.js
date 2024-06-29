import React, { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, error, isLoading } = useSignup()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
    setEmail("")
    setPassword("")
  }
  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label> Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
        <label>Password:</label>

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
        />
        <button disabled={isLoading}>log in</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default Login
