import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import Transaction from "./Transaction"
import { Table } from "react-bootstrap"
const API = process.env.REACT_APP_API_URL

export default function Transactions() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err))
  }, [])

  const accTotal = transactions.reduce((acc, curr) => {
    return (acc += curr.amount)
  }, 0)
  return (
    <div className="index_transactions">
      <div className="acc_total">
        <h3>Account Total:{accTotal}</h3>
      </div>

      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
