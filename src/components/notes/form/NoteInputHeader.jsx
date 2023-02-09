import React from 'react';
import LocaleContext from '../../../context/LocaleContext';

function NoteInputHeader() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="note-input__header mt-1">
      <h4 className="note-input__title">
        {locale === 'id' ? 'Tambah Catatan' : 'Add Note'}
      </h4>
    </div>
  );
}

export default NoteInputHeader;
