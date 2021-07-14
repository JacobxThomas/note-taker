const http = require('http');
const express = require('express');
const fs = require('fs');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});


app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

