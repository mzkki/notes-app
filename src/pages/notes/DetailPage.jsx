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

function DetailPage() {
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
    return 'Loading...';
  }

  async function onDeleteHandler(id) {
    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        navigate('/');
        Swal.fire('Deleted!', 'Catatan kamu berhasil dihapus!', 'success');
      }
    });
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
      title: 'Success',
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
