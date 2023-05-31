import React, { useState } from 'react';
import { useNotes } from '../context/NoteContext';

const NoteForm = () => {
  const { addNote } = useNotes();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Note content" required />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
