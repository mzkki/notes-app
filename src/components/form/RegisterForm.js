import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import useInput from "../../hooks/useInput";

function LoginForm() {
  const [email, handleEmailChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')
  const [confirmPassword, handleConfirmPasswordChange] = useInput('')

  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword1" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword2" label="Confirm Password">
        <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </FloatingLabel>
    </>
  )
}

export default LoginForm