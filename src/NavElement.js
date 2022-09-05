import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./components/style.css";
import { LinkContainer } from "react-router-bootstrap";
import "./components/nav.css";
const NavElement = () => (
  <>
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: "1" }}
    >
      <Container className="bg-dark">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src="./images/code.png" alt="" style={{ width: "50px" }} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ border: "none", outline: "none" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="p-4 ">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link style={{ fontSize: "17px" }}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Course">
              <Nav.Link style={{ fontSize: "17px" }}>Courses</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Blog">
              <Nav.Link style={{ fontSize: "17px" }}>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Books">
              <Nav.Link style={{ fontSize: "17px" }}>Books Shope</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Cart">
              <Nav.Link style={{ fontSize: "17px" }}>cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Team">
              <Nav.Link style={{ fontSize: "17px" }}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link style={{ fontSize: "17px" }}>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);
export default NavElement;
