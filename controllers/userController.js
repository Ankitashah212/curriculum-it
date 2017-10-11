var express = require("express");

var router = express.Router();

const User = require("../models/users.js");


// Import the model (users.js) to use its database functions.
//not sure if needed since we have const User, but commenting out just in case
// var users = require("../models/users.js");

var userid = 'ankita';
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

  //login login if user logged in
  //show default page

  //if not then show login page
  //for now showing default page
  if (user.length > 0) {
    res.render("index");
    // get data from database and show default page
  } else {
    // show login page
  }

});

router.post("/", function (req, res) {
  var username = req.body.username;
  var name = req.body.name;
  var password = req.body.password;
  console.log(username + "" + name + "" + password);
  //if username is in database, then skip below and go to /user route. Else, make new user using code below.
  return User.create({
    userid: username,
    name: name,
    password: password
  });
});

router.get("/user/allCourses/", function (req, res) {
  var userID = req.params.id;


  //if not then show login page
  //for now showing default page
  if (user.length > 0) {
    res.render("profile");
    // get data from database and show default page
  } else {
    // show login page
  }

});

router.post("/", function (req, res) {
  var username = req.body.username;
  var name = req.body.name;
  var password = req.body.password;
  console.log(username + "" + name + "" + password);
  //if username is in database, then skip below and go to /user route. Else, make new user using code below.
  return User.create({
    userid: username,
    name: name,
    password: password
  });
});

router.get("/user/allCourses/", function (req, res) {
  var userID = req.params.id;


  User.myCourses("ankita", function (data) {
    console.log(data);
  });
});


module.exports = router;


