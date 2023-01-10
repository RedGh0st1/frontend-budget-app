import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import Transaction from "./Transaction"
const API = process.env.REACT_APP_API_URL

export default function Transactions() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.err("catch", err))
  }, [])
  return (
    <div className="index_transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Recent Budget Transactions</th>
              <th>Date:</th>
              <th>Category:</th>
              <th>Amount:</th>
            </tr>
          </thead>
          <thbody>
            {transactions &
              transactions.map((transaction, index) => {
                return (
                  <Transaction
                    key={index}
                    transaction={transaction}
                    index={index}
                  />
                )
              })}
          </thbody>
        </table>
      </section>
    </div>
  )
}
