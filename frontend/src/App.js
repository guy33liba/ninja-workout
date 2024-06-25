import "./App.css"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WorkoutForm from "./components/WorkoutForm"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workoutForm" element={<WorkoutForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
