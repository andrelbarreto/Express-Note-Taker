//const router = require("express").Router();
const express = require("express");
// set the routes to require path
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

// Reroutes to index page if anything other than notes or index are inputed
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
}

