// backend/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple in-memory notes (no database yet)
let notes = [];

// Get all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Add a new note
app.post("/api/notes", (req, res) => {
  const note = req.body;
  notes.push(note);
  res.json({ message: "Note added!", note });
});

// Delete a note
app.delete("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter((_, idx) => idx !== id);
  res.json({ message: "Note deleted!" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

