import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import useInput from '../../hooks/useInput';
import FormButton from './FormButton';

function LoginForm(login) {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();

    login({ email, password });
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FloatingLabel>
      <FormButton />
    </form>
  );
}

export default LoginForm;
