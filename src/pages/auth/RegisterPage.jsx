import React from 'react';
import { Card, Row } from 'react-bootstrap';
import RegisterForm from '../../components/form/RegisterForm';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../utils/api';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      navigate('/');
    }
  }

  return (
    <Row className="d-flex justify-content-center">
      <Card style={{ width: '30rem' }} className="shadow border-0 p-4 mt-5">
        <Card.Body className="my-5">
          <Card.Title className="mb-4 text-center">Register Page</Card.Title>
          <RegisterForm register={onRegisterHandler} />
          <p>
            Sudah punya akun ?
            <Link to={'/'} className="text-decoration-none">
              Login
            </Link>
          </p>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default RegisterPage;
