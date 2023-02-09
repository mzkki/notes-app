import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import LocaleContext from '../../../context/LocaleContext';

function NoteArchiveButton({ archived, onArchive, id }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <Button variant="outline-success" onClick={() => onArchive(id)}>
      {archived
        ? locale === 'id'
          ? 'Aktifkan'
          : 'Activate'
        : locale === 'id'
        ? 'Arsipkan'
        : 'Archive'}
    </Button>
  );
}

NoteArchiveButton.propTypes = {
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteArchiveButton;
