import React from "react"
import { Button, Container, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <Container className="navbar">
      <Stack direction="horizontal" gap="4" className="mb-4">
        <h4 className="me-auto">
          <Link to="/">
            <Button className="transaction_btn">Home</Button>
          </Link>
        </h4>
        <h4 className="me-auto">
          <Link to="/transactions">
            {" "}
            <Button className="transaction_btn">Transactions</Button>
          </Link>
        </h4>
        <h4>
          <Link to="/transactions/new">
            <Button className="transaction_btn"> New Transaction</Button>
          </Link>
        </h4>
      </Stack>
    </Container>
  )
}
