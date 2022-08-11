import React from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";

export default function Dashboard() {
  // const token = localStorage.getItem("token");
  // console.log(token);
  // if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      <Container className="mt-3">
        <SBreadCrumb />
        <h1>Dashboard</h1>
      </Container>
    </>
  );
}
