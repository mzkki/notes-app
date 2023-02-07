import React from 'react';
import LoginForm from '../../components/form/LoginForm';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login } from '../../utils/api';

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <Row className="d-flex justify-content-center">
      <Card style={{ width: '30rem' }} className="shadow border-0 p-4 mt-5">
        <Card.Body className="my-5">
          <Card.Title className="mb-4 text-center">Login</Card.Title>
          <LoginForm login={onLogin} />
          <p>
            Don't have account yet ?{' '}
            <Link to={'/register'} className="text-decoration-none">
              Register
            </Link>{' '}
          </p>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default LoginPage;
