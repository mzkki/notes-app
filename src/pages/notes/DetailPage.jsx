import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../../components/notes/NoteDetail';
import {
  getNote,
  showFormattedDate,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../../utils/api';
import Swal from 'sweetalert2';
import LocaleContext from '../../context/LocaleContext';

function DetailPage() {
  const { locale } = React.useContext(LocaleContext);
  const { id } = useParams();
  const [note, setNote] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getDetailNote() {
      const { data } = await getNote(id);
      setNote(data);
    }
    getDetailNote();
  }, [id]);

  if (note.length === 0) {
    return locale === 'id' ? 'Memuat catatan...' : 'Loading....';
  }

  async function onDeleteHandler(id) {
    Swal.fire({
      title: locale === 'id' ? 'Yakin ingin menghapus ?' : 'Are you sure?',
      text:
        locale === 'id'
          ? 'Kamu tidak dapat mengembalikan catatan kembali!'
          : "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: locale === 'id' ? 'Batan' : 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: locale === 'id' ? 'Ya, Hapus!' : 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        delNote(id);
      }
    });
  }

  async function delNote(id) {
    await deleteNote(id);
    navigate('/');
    Swal.fire(
      'Deleted!',
      locale === 'id'
        ? 'Catatan kamu berhasil dihapus!'
        : 'Your note has deleted!',
      'success'
    );
  }

  async function onArchiveHandler(id) {
    if (note.archived) {
      await unarchiveNote(id);
      navigate('/');
    } else {
      await archiveNote(id);
      navigate('/archived');
    }
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

  return (
    <NoteDetail
      {...note}
      createdAt={showFormattedDate(note.createdAt)}
      onArchive={onArchiveHandler}
      onDelete={onDeleteHandler}
    />
  );
}

export default DetailPage;
