import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import useInput from "../../hooks/useInput";

function LoginForm() {
  const [email, handleEmailChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </FloatingLabel>
    </>
  )
}

export default LoginForm