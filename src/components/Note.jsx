import { useNotes } from '../context/NoteContext';

const Note = ({ note, index }) => {
  const { deleteNote } = useNotes();

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>

      <button onClick={() => deleteNote(index)}>Delete</button>
    </div>
  );
};

export default Note;
