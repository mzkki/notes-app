import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import LocaleContext from '../../context/LocaleContext';

function FormButton() {
  const currentPath = useLocation();

  const { locale } = React.useContext(LocaleContext);

  return (
    <Button variant="success" className="w-100 my-4" size="lg" type="submit">
      {currentPath.pathname === '/register'
        ? locale === 'id'
          ? 'Daftar'
          : 'Register'
        : locale === 'id'
        ? 'Masuk'
        : 'Login'}
    </Button>
  );
}

export default FormButton;
