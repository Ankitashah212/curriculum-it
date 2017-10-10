var express = require("express");

var router = express.Router();

// Import the model (users.js) to use its database functions.
var users = require("../models/users.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/user", function(req, res) {

//   });
// });

//may change to post
router.get("/user/allcourses", function(req, res) {
  // users.all(function(data) {
  //   var allCourses = {
  //     course: data
  //   };
  var fakeData = {coursename: "Biology", description: "A biology course"};
  console.log(fakeData);
  res.render("index", fakeData);
  });
// });


router.post("/user/signup", function(req, res) {
  users.create([
    "userid", "courseid"
  ], [
    req.body.userid, req.body.courseid
  ], function(result) {
    res.redirect("/")
  });
});

  // users.create([
  //   "name", "listened"
  // ], [
  //   req.body.name, req.body.sleepy
  // ], function(result) {
  //   Send back the ID of the new quote
  //   res.json({ id: result.insertId });

// function(result) {
  // Send back the ID of the new quote
//   res.redirect("/?id=" + result.insertId );
// });
// });

  // var condition = "id = " + req.params.id;
  // console.log("condition", condition);
  // song.update({
  //   listened: req.body.sleepy
  // }, condition, function(result) {
  //   if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
