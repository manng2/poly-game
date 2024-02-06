var express = require("express");
var app = express();
const path = require("path");

// set the view engine to ejs
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.use("/assets", express.static("assets"));

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("home");
});


app.listen(8080);
console.log("Server is listening on port 8080");