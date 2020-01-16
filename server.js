// Dependencies
// =============================================================
var express = require("express");
const routes = require("./routes");
var path = require("path");

// Sets up the Express Server App
// =============================================================
var app = express();
app.use(express.static('public'));
// sets port for herouku or local 8080
const PORT = process.env.port || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//requires use of routes for the app
require("./notes/notesRoutes")(app);


// sets up api routes files
app.use(routes);


// // Note Element
// // =============================================================
// var note = [
//   {
//     NoteTitle: "Yoda",
//     NoteBody: "The Best Jedi",
//   }, 
// ]


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
