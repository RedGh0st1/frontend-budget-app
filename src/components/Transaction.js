import React from "react"
import { Link } from "react-router-dom"

export default function Transaction({ transaction, index }) {
  let date = new Date(transaction.date)
  const budgetDate = new Intl.DateTimeFormat("en-us", {
    dateStyle: "long",
  }).format(date)
  return (
    <div className="detail">
      <tr>
        <td>{budgetDate}</td>

        <td>
          <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
        </td>

        <td>{transaction.amount}</td>

        <td>{transaction.category}</td>
      </tr>
    </div>
  )
}
