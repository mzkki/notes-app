import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import useInput from '../../hooks/useInput';
import FormButton from './FormButton';
import PropTypes from 'prop-types';
import LocaleContext from '../../context/LocaleContext';

function LoginForm({ login }) {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const { locale } = React.useContext(LocaleContext);

  function onSubmitHandler(event) {
    event.preventDefault();

    login({ email, password });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <FloatingLabel
        controlId="floatingInput"
        label={locale === 'id' ? 'Alamat Surel' : 'Email Address'}
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label={locale === 'id' ? 'Kata Sandi' : 'Password'}
      >
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

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
