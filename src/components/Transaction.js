import React from "react"
import { Link } from "react-router-dom"

export default function Transaction({ transaction, index }) {
  return (
    <div className="detail">
      <tr>
        <td>{transaction.date}</td>
      </tr>
      <tr>
        <td>
          <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
        </td>
      </tr>
      <tr>
        <td>{transaction.amount}</td>
      </tr>
    </div>
  )
}
