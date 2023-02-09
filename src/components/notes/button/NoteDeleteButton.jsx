import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LocaleContext from '../../../context/LocaleContext';

function NoteDeleteButton({ onDelete, id }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Button variant="danger" onClick={() => onDelete(id)} className="mx-2">
      {locale === 'id' ? 'Hapus' : 'Delete'}
    </Button>
  );
}

NoteDeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteDeleteButton;
