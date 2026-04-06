const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Dummy data
let notes = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build project" }
];

// GET notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});