var express = require("express");

var router = express.Router();

// Import the model (users.js) to use its database functions.
var users = require("../models/users.js");

router.get("/user", function(req, res) {
      res.render("index");
  });

//This might be a post request.
router.get("/user/allcourses", function(req, res) {
    res.send("All active (and completed?) courses ");
 //Will possibly use the code below to grab info from tables, but could change to include sequelize syntax--julia
  // var allCourses = {
  //     course: data
  //   };
  // res.render("index", allCourses);
});

router.get("/user/signup", function(req, res) {
  res.send("This is where users can sign up for external classes.")
  });

  //I think we need a post and get for user signup? To be completed w/db info. --julia
// router.post("/user/signup", function(req, res) {
//   });

module.exports = router;
