//const router = require("express").Router();
const express = require("express");
const path = require("path");

// index html at /
module.exports = function(app) {
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "../../public/index.html"));
});

// notes.html at public/notes
app.get("/notes", function(req, res) {
  res.json(path.join(__dirname, "../../public/notes.html"));
});
}

// router
//   .route("/")
//   .get(function(req, res){
//   res.sendFile(path.join(__dirname, "../../public/index.html"));
// });

// // notes.html at /notes

// router
//   .route("/notes")
//   .get(function(req, res){
//   res.sendFile(path.join(__dirname, "../../public/notes.html"));
// });


// module.exports = router;