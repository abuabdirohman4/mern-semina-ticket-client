import React from "react";
import { Form } from "react-bootstrap";
import SAlert from "../../components/Alert";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function SForm({alert, form, handleChange, handleSubmit, isLoading}) {
  return (
    <Form>
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
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
      <SButton
        variant="primary"
        action={handleSubmit}
        disabled={isLoading}
        loading={isLoading}
      >
        Submit
      </SButton>
    </Form>
  );
}
