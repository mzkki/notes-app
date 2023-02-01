import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";

function FormButton() {
  const currentPath = useLocation()

  return (
    <Button variant="success" className="w-100 mt-4 ">{currentPath.pathname === '/register' ? 'Register' : 'Login'}</Button>
  )
}

export default FormButton