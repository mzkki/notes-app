import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import useInput from '../../hooks/useInput';
import FormButton from './FormButton';
import PropTypes from 'prop-types';

function RegisterForm({ register }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [name, setName] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();

    register({ email, name, password });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <FloatingLabel
        controlId="floatingInputEmail"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={setEmail}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputName"
        label="Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name"
          value={name}
          onChange={setName}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword1"
        label="Password"
        className="mb-3"
      >
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
      </FloatingLabel>
      <FormButton />
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
