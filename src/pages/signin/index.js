import { React, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SForm from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";
// import axios from "axios";
// import config from "../../configs";

function PageSignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    status: false,
    type: "danger",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData("/cms/auth/signin", form);
      // const res = await axios.post(`${config.api_host_dev}/cms/auth/signin`, {
      //   email: form.email,
      //   password: form.password,
      // });
      // console.log(res.data.data.token);
      // localStorage.setItem("token", res.data.data.token);

      dispatch(userLogin(res.data.data.token, res.data.data.role));

      setIsLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err.response.data.msg);
      setAlert({
        status: true,
        message: err?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
    }
  };

  // const token = localStorage.getItem("token");
  // if (token) return <Navigate to="/" replace={true} />;

  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <SForm
            alert={alert}
            form={form}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignIn;
