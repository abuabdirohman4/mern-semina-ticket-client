import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavAccess from "../NavAccess";
import { useNavigate } from "react-router-dom";

function SNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavAccess action={() => navigate("/")}>Home</NavAccess>
          <NavAccess action={() => navigate("/categories")}>Categories</NavAccess>
          <NavAccess action={() => navigate("/talents")}>Talents</NavAccess>
          <NavAccess action={() => navigate("/events")}>Events</NavAccess>
          <NavAccess action={() => navigate("/participant")}>Participant</NavAccess>
          <NavAccess action={() => navigate("/transactions")}>
            Transactions
          </NavAccess>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
