import React from "react";
import { Container } from "react-bootstrap";
// import { useSelector } from "react-redux";
import SBreadCrumb from "../../components/Breadcrumb";

export default function Dashboard() {
  // const token = localStorage.getItem("token");
  // console.log(token);
  // if (!token) return <Navigate to="/signin" replace={true} />;

  // Check isi dari redux auth
  // const state = useSelector((state) => state);
  // const state = useSelector((state) => state.auth);
  // console.log("state");
  // console.log(state);

  // const { token } = useSelector((state) => state.auth);
  // console.log("token");
  // console.log(token);

  // const { role } = useSelector((state) => state.auth);
  // console.log("role");
  // console.log(role);

  return (
    <Container className="mt-3">
      <SBreadCrumb />
      <h1>Dashboard</h1>
    </Container>
  );
}
