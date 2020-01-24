//const router = require("express").Router;

//requirements for the code to run include express, fs and path
var express = require("express");
var fs = require("fs");
var path = require("path");
let notesArray = getDatabase();


// create the module that exports app to post and delete notes from api database
module.exports = function(app) {
app.get("/api/notes", function(req, res) {
  
    res.json(getDatabase());

});

// save a new note from req.body
app.post("/api/notes", function(req,res) {
  const newNote = req.body;
  newNote.id = Math.floor(Math.random() * 10000);
  notesArray.push(newNote);
  saveDatabase(notesArray);
  });
  



// delete a note based on parameters passed
app.delete ("/api/notes/:id", function (req, res) {
  notesArray = notesArray.filter (note => note.id != req.params.id)
  res.json(notesArray);
  saveDatabase(notesArray);

});
}

/* this returns a copy of database that can be modified */
/* loads the .json file and returns a copied array[] */
function getDatabase() {
  const json = fs.readFileSync(path.join(__dirname, "../../db/db.json"));
  return JSON.parse(json);
}

/* this will write over the .json file with whatever you pass to this function */
function saveDatabase(newData) {
  return fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(newData))
}