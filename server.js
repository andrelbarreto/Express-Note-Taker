// Dependencies
// =============================================================
var express = require("express");
const routes = require("./routes");
var path = require("path");

// Sets up the Express Server App
// =============================================================


// sets port for herouku or local 8080
const PORT = process.env.port || 8080;
//Create var to require express package 


//Create express server
var app = express();


//Creating express app
app.use(express.static('public'));

//Linking html and api routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//requires use of routes for the app
require("./notes/notesRoutes")(app);


// sets up api routes files
app.use(routes);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
