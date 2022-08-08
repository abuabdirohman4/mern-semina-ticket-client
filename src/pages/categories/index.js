import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Spinner } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import SBreadCrumb from "../../components/Breadcrumb";
import SButton from "../../components/Button";
import SNavbar from "../../components/Navbar";
import config from "../../configs";

export default function PageCategories() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoriesAPI = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // setTimeout(() => {
        //   setIsLoading(false);
        //   setData(res.data.data);
        // }, 4000);
        setIsLoading(false);
        setData(res.data.data);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };
    getCategoriesAPI();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      <SNavbar />
      <Container className="mt-3">
        <SBreadCrumb textSecound={"Categories"} />

        <SButton action={() => navigate("/categories/create")}>Tambah</SButton>

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  <div className="flex items-center justify-center">
                    <Spinner animation="border" variant="light" />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>{data.name}</td>
                  <td>Otto</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
