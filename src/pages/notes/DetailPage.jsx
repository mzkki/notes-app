import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../../components/notes/NoteDetail';
import { getNote, showFormattedDate } from '../../utils/api';

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState([]);

  React.useEffect(() => {
    async function getDetailNote() {
      const { data } = await getNote(id);
      setNote(data);
    }
    getDetailNote();
  }, [id]);

  return <NoteDetail {...note} createdAt={showFormattedDate(note.createdAt)} />;
}

export default DetailPage;
