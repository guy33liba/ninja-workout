import "./App.css"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useAuthContext } from "./hooks/useAuthContext"

function App() {
  const { user } = useAuthContext()
  const navigate = useNavigate()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={user ? <Home /> : navigate("/login")} />
            <Route path="/login" element={!user ? <Login /> : navigate("/")} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
