import { BrowserRouter, Routes, Route, Route } from "react-router-dom"
import "./App.css"
import Workout from "./pages/Workout"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout" element={<Workout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
