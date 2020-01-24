// Dependencies
// =============================================================

const fs = require('fs');
const path = require('path');
//const routes = require('./routes');
var PORT = process.env.PORT || 3006;

//Create let to require express package 
let express = require('express');

//Create express server
const app = express();


//Creating express app
app.use(express.static('public'));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Linking html and api routes
require("./routes/api/apiRoutes")(app);
require("./routes/html/htmlRoutes")(app);



//handling possible route errors
app.get("/about", (req, res, next) => {
  res.send("This is the about route!");
});
// Handle 404 error / browser error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
// error handler middleware / server side
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
