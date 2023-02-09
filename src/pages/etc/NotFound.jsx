import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LocaleContext from '../../context/LocaleContext';

function NotFound() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div class="position-absolute top-50 start-50 translate-middle">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          <span class="text-danger">Opps!</span>{' '}
          {locale === 'id' ? 'Halaman tidak ditemukan.' : 'Page not found.'}
        </p>
        <p class="lead">
          {locale === 'id'
            ? 'Halaman yang kamu cari tidak ditemukan.'
            : 'The page you’re looking for doesn’t exist.'}
        </p>
        <Link to="/">
          <Button variant="warning">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
