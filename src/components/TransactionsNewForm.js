import React from "react"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function TransactionsNewform() {
  const navigate = useNavigate()
  const [transaction, setNewTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
    paid: false,
  })

  function handleTextChange(e) {
    setNewTransaction({ ...transaction, [e.target.id]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => navigate(`/transactions`))
      .catch((err) => console.log("*"))
  }

  return (
    <div className="NEW">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of transaction"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="amount of the transaction"
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder=" Date of transaction"
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="Who was the transaction from"
          required
        />
        <label htmlFor="category"></label>
        <input
          id="category"
          value={transaction.category}
          type="text"
          name="category"
          onChange={handleTextChange}
          placeholder="what category do this fall in"
          required
        />
        <input type="submit" />
        <Link to="/transactions">
          <button className="back_btn">Back</button>
        </Link>
      </form>
    </div>
  )
}
