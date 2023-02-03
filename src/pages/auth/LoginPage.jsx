import React from "react";
import LoginForm from "../../components/form/LoginForm";
import { Card, Row } from "react-bootstrap";
import FormButton from "../../components/form/FormButton";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Row className="d-flex justify-content-center">
      <Card style={{ width: '30rem' }} className="shadow border-0 p-4 mt-5">
        <Card.Body className="my-5">
          <Card.Title className="mb-4 text-center">Login Page</Card.Title>
          <LoginForm />
          <FormButton />
          <p>Belum punya akun ? <Link to={'/register'} className="text-decoration-none">Register</Link> </p>
        </Card.Body>
      </Card>
    </Row>
  )
}

export default LoginPage