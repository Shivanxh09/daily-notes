const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let notes = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build project" }
];

// GET notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// POST note
app.post("/notes", (req, res) => {
  const newNote = {
    id: Date.now(),
    text: req.body.text
  };

  notes.push(newNote);
  res.json(newNote);
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});