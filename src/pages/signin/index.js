import { React, useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

function PageSignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log("e.taget.name : ");
    // console.log(e.target.name);
    // console.log(" ");
    // console.log("e.taget.value : ");
    // console.log(e.target.value);
  };

  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Form>
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
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {/* <Button variant="primary">Submit</Button> */}
            <SButton variant="primary">Submit</SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignIn;
