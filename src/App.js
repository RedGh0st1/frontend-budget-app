import React from "react"
import { Routes, Route } from "react-router-dom"

// PAGES
import Home from "./Pages/Home"
import Edit from "./Pages/Edit"
import FourZeroFour from "./Pages/FourZeroFour"
import Index from "./Pages/Index"
import New from "./Pages/New"
import Show from "./Pages/Show"

// COMPONENTS
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

// import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:index" element={<Show />} />
        <Route path="/transactions/:index/edit" element={<Edit />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
