import React from 'react';
import { useNavigate } from 'react-router';
import NoteInput from '../../components/notes/form/NoteInput';
import { addNote } from '../../utils/api';
import Swal from 'sweetalert2';
import LocaleContext from '../../context/LocaleContext';

function AddNote() {
  const { locale } = React.useContext(LocaleContext);

  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/');
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
    });
    await Toast.fire({
      icon: 'success',
      title: locale === 'id' ? 'Berhasil' : 'Success',
    });
  }
  return <NoteInput onAddHandler={onAddNoteHandler} />;
}

export default AddNote;
