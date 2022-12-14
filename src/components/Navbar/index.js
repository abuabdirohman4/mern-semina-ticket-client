import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavLink from "../NavAccess";
import { useNavigate } from "react-router-dom";
import {
  accessCategories,
  accessTalents,
  accessEvents,
  accessParticipant,
  accessPayments,
  accessOrders,
  accessOrganizers,
  accessAdmin,
} from "../../const/access";

function SNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      // console.log("role default ", role)
      let { role } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      // console.log("role setelah if ", role)
      setRole(role);
      // console.log("role setelah setRole ", role)
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin ";
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            role={role}
            roles={accessCategories.lihat}
            // roles={accessOrders.lihat}
            action={() => navigate("/")}
          >
            Home
          </NavLink>
          <NavLink
            role={role}
            roles={accessCategories.lihat}
            action={() => navigate("/categories")}
          >
            Categories
          </NavLink>
          <NavLink
            role={role}
            roles={accessTalents.lihat}
            action={() => navigate("/talents")}
          >
            Talents
          </NavLink>
          <NavLink
            role={role}
            roles={accessPayments.lihat}
            action={() => navigate("/payments")}
          >
            Payment
          </NavLink>

          {/* Khusus Owner */}
          <NavLink
            role={role}
            roles={accessOrganizers.lihat}
            action={() => navigate("/organizers")}
          >
            Oranizers
          </NavLink>
          <NavLink
            role={role}
            roles={accessAdmin.lihat}
            action={() => navigate("/admins")}
          >
            Admins
          </NavLink>

          <NavLink
            role={role}
            roles={accessEvents.lihat}
            action={() => navigate("/events")}
          >
            Events
          </NavLink>
          <NavLink
            role={role}
            roles={accessParticipant.lihat}
            action={() => navigate("/participant")}
          >
            Participant
          </NavLink>
          <NavLink
            role={role}
            roles={accessOrders.lihat}
            action={() => navigate("/orders")}
          >
            Orders
          </NavLink>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
