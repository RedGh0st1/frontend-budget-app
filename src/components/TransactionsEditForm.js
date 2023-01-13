import React from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
// import { form } from "react-bootstrap"

const API = process.env.REACT_APP_API_URL

export default function TransactionsEditForm() {
  let { index } = useParams()
  let navigate = useNavigate()

  const [transaction, setTransactions] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
    id: 0,
  })
  function handleTextChange(e) {
    setTransactions({ ...transaction, [e.target.id]: e.target.value })
  }
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err))
  }, [index])

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((res) => {
        setTransactions(res.data)
        navigate(`/transactions/${index}`)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          placeholder="name of transaction"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          value={transaction.amount}
          placeholder="amount of the transaction"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          value={transaction.date}
          placeholder="date of transaction"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          placeholder="where is transaction from"
          onChange={handleTextChange}
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
        <input type="submit" className="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button className="btn_btn">Go BACK!</button>
      </Link>
    </div>
  )
}
