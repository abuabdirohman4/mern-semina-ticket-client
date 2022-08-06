import axios from "axios";
import { React, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Config from "../../configs";
import SForm from "./form";

function PageSignIn() {
  const navigate = useNavigate();

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
      const res = await axios.post(`${Config.api_host_dev}/cms/auth/signin`, {
        email: form.email,
        password: form.password,
      });
      console.log(res.data.data.token);
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
            handleKeyDown={handleKeyDown}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignIn;
