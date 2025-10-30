// backend/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/cloudnotes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Define a Note schema (how data is stored)
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", noteSchema);

// ✅ Get all notes
app.get("/api/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// ✅ Add a new note
app.post("/api/notes", async (req, res) => {
  const newNote = new Note(req.body);
  await newNote.save();
  res.json({ message: "Note added!", note: newNote });
});

// ✅ Delete a note
app.delete("/api/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted!" });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});

