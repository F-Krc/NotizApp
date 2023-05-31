import React, { useState, useEffect, createContext, useContext } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    return savedNotes || [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    const newNote = { title, content };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const values = { notes, addNote, deleteNote }

  return (
    <NoteContext.Provider value={ values }>
      {children}
    </NoteContext.Provider>
    );
};

export const useNotes = () => useContext(NoteContext);
