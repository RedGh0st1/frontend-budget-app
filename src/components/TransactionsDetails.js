import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
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
  return (
    <article>
      <div className="details">
        <h1>Budget Details</h1>
        <h4>Total monthly income:{}</h4>
      </div>
      <div className="more_details">
        <h3 className="item-name"> Name: {transaction.item_name}</h3>
        <span>Amount:</span>
        <p>{transaction.amount}</p>
        <br></br>
        <br></br>
        <span>Date:</span>
        <p>{transaction.date}</p>
        <br></br>
        <span>From:</span>
        <p>{transaction.from}</p>
        <br></br>
        <span>Category:</span>
        <p>{transaction.category}</p>
        <br></br>
      </div>
      <div className="ShowNavigation">
        <div>
          <Link to={`/transactions`}>
            <Button variant="primary">Back</Button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <Button variant="outline-primary"> Edit</Button>
          </Link>
        </div>
        <div>
          <Button variant=" outline-primary" onClick={handleDelete}>
            {" "}
            Delete
          </Button>
        </div>
      </div>
    </article>
  )
}
