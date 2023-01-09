import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="budget_heading">
        <Link to="/transactions">Budget Applications</Link>
      </h1>
      <button className="transaction_btn">
        <Link to="/transactions">New Transaction</Link>
      </button>
    </nav>
  )
}
