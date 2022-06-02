import React, { useState, useEffect } from "react";
import "./css/style.min.css";
import { Header } from "./components/Header";
import { Note } from "./components/Note";
import notesData from "./json/notes.json";

function App() {
  const [notes, setNotes] = useState(notesData || []);
  const [filter, setFilter] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const filtered = [];

    notes.forEach((note) => {
      if (note.text.toLowerCase().includes(filter.toLowerCase())) {
        filtered.push(note);
      }
    });

    setFilteredNotes(filtered);
  }, [notes, filter]);

  const filterChange = (filterValue) => {
    setFilter(filterValue);
    setTimeout(() => {}, 0);
  };

  const createNewNote = (userInput) => {
    const newNote = {
      id: new Date(),
      text: userInput,
    };
    setNotes([...notes, newNote]);
  };

  const removeNote = (noteId) => {
    setNotes([...notes.filter((note) => note.id !== noteId)]);
  };

  return (
    <div className="wrapper">
      <Header createNewNote={createNewNote} filterChange={filterChange} />
      <main className="page">
        <div className="page__container _container">
          <ul className="page__note-list note-list">
            {filteredNotes.map((note) => {
              return (
                <Note
                  removeNote={removeNote}
                  key={note.id}
                  id={note.id}
                  text={note.text}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
