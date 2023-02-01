import React from "react";
import FormInput from "../../components/form/FormInput";
import { Card, Row } from "react-bootstrap";
import FormButton from "../../components/form/FormButton";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Row className="position-absolute top-50 start-50 translate-middle">
      <Card style={{ width: '30rem' }} className="shadow border-0 p-4">
        <Card.Body className="my-5">
          <Card.Title className="mb-4 text-center">Login Page</Card.Title>
          <FormInput />
          <FormButton />
          <Link to={'/register'}>Register</Link>
        </Card.Body>
      </Card>
    </Row>
  )
}

export default LoginPage