import React from "react"
import { Button, Nav, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <Nav className="navbar">
      <Stack direction="horizontal" className="mb-5">
        <h4 className="">
          <Link to="/">
            <Button className="transaction_btn">Home</Button>
          </Link>
        </h4>
        <h4 className="vut">
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
    </Nav>
  )
}
