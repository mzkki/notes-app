import React from 'react';
import { Card, Row } from 'react-bootstrap';
import RegisterForm from '../../components/form/RegisterForm';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../utils/api';
import LocaleContext from '../../context/LocaleContext';
import Swal from 'sweetalert2';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);

  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error, message } = await register(user);

    if (!error) {
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
      });
    }
  }

  return (
    <Row className="d-flex justify-content-center">
      <Card style={{ width: '30rem' }} className="shadow border-0 p-4 mt-5">
        <Card.Body className="my-5">
          <Card.Title className="mb-4 text-center">
            {locale === 'id' ? 'Daftar Akun' : 'Register Account'}
          </Card.Title>
          <RegisterForm register={onRegisterHandler} />
          <p>
            {locale === 'id'
              ? 'Sudah punya akun ? '
              : 'Already have an account ? '}
            <Link to={'/'} className="text-decoration-none">
              {locale === 'id' ? 'Masuk' : 'Login'}
            </Link>
          </p>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default RegisterPage;
