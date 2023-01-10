import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function TransactionsDetails() {
  const [transaction, setTransactions] = useState([])
  let { index } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransactions(res.data))
      .catch((err) => navigate("*"))
  }, [index, navigate])

  function handleDelete() {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((res) => navigate(`/transactions`))
      .catch((err) => console.error(err))
  }
  return <div className="details">transactionsDetails</div>
}
