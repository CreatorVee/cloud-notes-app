// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // Load notes from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/notes").then((res) => {
      setNotes(res.data);
    });
  }, []);

  // Add note
  const addNote = () => {
    axios.post("http://localhost:5000/api/notes", { text: input }).then((res) => {
      setNotes([...notes, res.data.note]);
      setInput("");
    });
  };

  // Delete note
  const deleteNote = (index) => {
    axios.delete(`http://localhost:5000/api/notes/${index}`).then(() => {
      setNotes(notes.filter((_, i) => i !== index));
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cloud Notes App</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((note, i) => (
          <li key={i}>
            {note.text} <button onClick={() => deleteNote(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

