import React, { Component } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/esl/">ESL</Nav.Link>
            <Nav.Link href="/assignments">Worship Support</Nav.Link>
            <NavDropdown title="Calendar" id="calendar-dropdown">
              <NavDropdown.Item href="/calendar/church">Church</NavDropdown.Item>
              <NavDropdown.Item href="/calendar/preschool">Preschool</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/staff">Staff</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
