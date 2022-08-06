import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SBreadCrumb from "../../components/Breadcrumb";
import SButton from "../../components/Button";
import SNavbar from "../../components/Navbar";
import config from "../../configs";

export default function PageCategories() {
  const token = localStorage.getItem("token");
  // console.log(token);

  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [bilanganGanjil, setBilanganGanjil] = useState(false);

  console.log("data", data);
  console.log("counter", counter);
  console.log("bilanganGanjil", bilanganGanjil);

  useEffect(() => {
    console.log("useEffect");

    const getCategoriesAPI = async () => {
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);

        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategoriesAPI();
  }, []);

  useEffect(() => {
    console.log("useEffect Counter");
    setBilanganGanjil(counter % 2 !== 0 ? true : false)
  }, [counter])
  

  if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      {console.log("render")}
      <SNavbar />
      <Container className="mt-3">
        <SBreadCrumb textSecound={"Categories"} />

        {/* <SButton>Tambah</SButton> */}
        <SButton action={() => setCounter(counter + 1)}>Tambah</SButton>
        <h1>
          {bilanganGanjil
            ? `${counter} adalah bilangan ganjil`
            : `${counter} adalah bilangan genap`}
        </h1>

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
