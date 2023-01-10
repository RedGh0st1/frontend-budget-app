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
          id="item_name"
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
        <label htmlFor="category">Category:</label>
        <select
          onchange={handleTextChange}
          id="category"
          type="text"
          value={transaction.category}
        >
          <option value="">Please pick!!</option>
          <option value="taxes">Taxes</option>
          <option value="savings">Savings</option>
          <option value="groceries">Groceries</option>
          <option value="pet_Care">Pet Care</option>
          <option value="monthly_Bills">Monthly Bills</option>
          <option value="income">Income</option>
          <option value="insurance">Insurance</option>
          <option value="food">Food</option>
          <option value="medical">Medical</option>
          <option value="expense">Expense</option>
          <option value="vacation">Vacation</option>
          <option value="rent">Rent</option>
        </select>
        <input type="submit" />
        <input type="submit" />
        <Link to="/transactions">
          <button className="bK_btn">Back</button>
        </Link>
      </form>
    </div>
  )
}
