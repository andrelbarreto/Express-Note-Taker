// Dependencies
// =============================================================

const fs = require('fs');
const path = require('path');
var PORT = process.env.PORT || 3006;

//Create const to require express package 
const express = require('express');

//Create express server
const app = express();


//Creating express app
app.use(express.static('public'));


//Linking html and api routes
require("./routes/api/apiRoutes")(app);
require("./routes/html/htmlRoutes")(app);


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// sets up api routes files
// app.use(routes);


// app.get("/notes", (request, response) => {
//   response.sendFile(path.join(__dirname, "..", "notes.html"));
//   console.log("Your Notes!");

// })
// app.get("*", (request, response) => {
//   response.sendFile(path.join(__dirname, "..", "index.html"));
//   console.log("Your Index!");

// })

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
