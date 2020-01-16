// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//requires use of routes for the app
require("./notes/notesRoutes")(app);


// // Note Element
// // =============================================================
// var Table = [
//   {
//     customerName: "Yoda",
//     phoneNumber: "7736079056",
//     customerEmail: "Yoda@gmail.com",
//     customerID: "FXZ01",
//   }, 
// ]


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
