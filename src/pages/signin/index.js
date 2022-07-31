import axios from "axios";
import { React, useState } from "react";
import { Form, Container, Card } from "react-bootstrap";
import SAlert from "../../components/Alert";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { useNavigate } from "react-router-dom";

function PageSignIn() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false)

  const [alert, setAlert] = useState({
    status: false,
    type: "danger",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );
      console.log(res.data.data.token);
      setIsLoading(false)
      navigate('/')
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
          <Form>
            {alert.status && (
              <SAlert type={alert.type} message={alert.message} />
            )}
            <TextInputWithLabel
              label="Email Address"
              name="email"
              value={form.email}
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <TextInputWithLabel
              label="Email Address"
              name="password"
              value={form.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <SButton variant="primary" action={handleSubmit} disabled={isLoading} loading={isLoading}>
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignIn;
