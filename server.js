var express = require("express");
var bodyParser = require("body-parser");
//const sequelize = require('./config/connection.js');


var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/appController.js");
var userRoutes = require("./controllers/userController.js");

app.use("/", routes, userRoutes);
// app.use("/user", userRoutes);

app.listen(port, function() {
    console.log("Server running on PORT " + port);
});
