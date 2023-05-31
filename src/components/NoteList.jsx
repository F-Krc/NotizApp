import { useNotes } from '../context/NoteContext';
import Note from './Note';

const NoteList = () => {
  const { notes } = useNotes();

  return (
    <>
      {notes.map((note, index) => (
        <Note key={index} note={note} index={index} />
      ))}
    </>
  );
};

export default NoteList;
