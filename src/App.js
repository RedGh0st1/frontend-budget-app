import { Router, Routes, Route } from "react-router-dom"

// PAGES
import Home from "./Pages/Home"

// COMPONENTS
import NavBar from "./components/NavBar"

// import "./App.css"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
      </Routes>
    </Router>
  )
}

export default App
