// import axios from "axios";
// import config from "../../configs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SBreadCrumb from "../../components/Breadcrumb";
import SButton from "../../components/Button";
import { accessCategories } from "../../const/access";
import { fetchCategories } from "../../redux/categories/actions";
// import { Table } from "../../components/Table";

export default function PageCategories() {
  // const token = localStorage.getItem("token");
  // console.log(token)
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const getCategoriesAPI = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       // setTimeout(() => {
  //       //   setIsLoading(false);
  //       //   setData(res.data.data);
  //       // }, 4000);
  //       setIsLoading(false);
  //       setData(res.data.data);
  //     } catch (err) {
  //       setIsLoading(false);
  //       console.log(err);
  //     }
  //   };
  //   getCategoriesAPI();
  // }, );

  // if (!token) return <Navigate to="/signin" replace={true} />;

  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);
  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    console.log("checkAccess");
    checkAccess();
  }, []);

  useEffect(() => {
    console.log("dispatch(fetchCategories())");
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Container className="mt-3">
        <SBreadCrumb textSecound={"Categories"} />

        {access.tambah && (
          <SButton action={() => navigate("/categories/create")}>
            Tambah
          </SButton>
        )}

        {/* <Table
          thead={["Nama", "Aksi"]}
          tbody={["name"]}
          data={categories.data}
          editUrl={access.edit ? "categories/edit" : null}
          deleteAction={access.hapus ? (id) => handleDelete(id) : null}
          withoutPagination
        /> */}
      </Container>
    </>
  );
}
