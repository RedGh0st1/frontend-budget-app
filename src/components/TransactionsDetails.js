import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Card, Stack } from "react-bootstrap"
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
      .catch((err) => navigate("/*"))
  }, [index, navigate])

  function handleDelete() {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((res) => navigate(`/transactions`))
      .catch((err) => console.error(err))
  }
  return (
    <Card className="details" style={{ textAlign: "center" }}>
      <Card.Body className="sm">
        <Card.Title>
          <h1>Budget Details</h1>
        </Card.Title>
        <div className="more_details">
          <h3 className="item-name">
            {" "}
            Name
            <br></br>
            {transaction.item_name}
          </h3>
          <hr></hr>
          <p>
            <span>Amount: </span>
            {transaction.amount}
          </p>
          <p>
            <span>Date: </span>
            {transaction.date}
          </p>
          <p>
            <span>From: </span> {transaction.from}
          </p>
          <p>
            <span>Category: </span>
            {transaction.category}
          </p>
        </div>
        <div className="ShowNavigation">
          <div>
            <Stack direction="horizontal">
              <Link to={`/transactions`}>
                <Button variant="primary">Back</Button>
              </Link>
              <Link to={`/transactions/${index}/edit`}>
                <Button variant="outline-primary"> Edit</Button>
              </Link>
              <Link to={`/transactions`}>
                <Button variant="primary" onClick={handleDelete}>
                  Delete
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
