import React from 'react';
import { Button } from 'react-bootstrap';
import LocaleContext from '../../../context/LocaleContext';

function ButtonInput() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="d-grid gap-2 mt-3">
      <Button variant="outline-success" type="submit">
        {locale === 'id' ? 'Tambah Catatan' : 'Add Note'}
      </Button>
    </div>
  );
}

export default ButtonInput;
