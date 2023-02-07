import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import NoteList from '../../components/notes/NoteList';
import SearchNote from '../../components/notes/SearchNote';
import { getActiveNotes, getArchivedNotes } from '../../utils/api';

function Homepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  const currentPath = useLocation().pathname;

  function onKeywordChange(keyword) {
    setKeyword(keyword);
    setSearchParams(keyword);
  }

  React.useEffect(() => {
    async function getActive() {
      const { data } = await getActiveNotes();
      setNotes(data);
    }
    async function getArchive() {
      const { data } = await getArchivedNotes();
      setNotes(data);
    }
    if (currentPath === '/') {
      getActive();
    } else if (currentPath === '/archived') {
      getArchive();
    }
  }, [currentPath]);

  return (
    <>
      <SearchNote keyword={keyword} changeKeyword={onKeywordChange} />
      {notes ? (
        <NoteList notes={notes} query={keyword} />
      ) : (
        <p>Tidak ada data</p>
      )}
    </>
  );
}

export default Homepage;
