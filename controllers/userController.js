var express = require("express");

var router = express.Router();

// Import the model (users.js) to use its database functions.
var users = require("../models/users.js");

router.get("/user", function(req, res) {
      res.render("index");

   
});
// TODO make this endpoint work!


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
//END OF WORKING CODE
//------------------------------------------------

//saving for reference, from an in-class exercise--julia
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