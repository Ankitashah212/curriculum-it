var express = require("express");

var router = express.Router();
var orm = require("../config/orm.js");
const courses = require("../models/course.js");

// Import the model (users.js) to use its database functions.
//not sure if needed since we have const User, but commenting out just in case
// var users = require("../models/users.js");

var user = 'ankita';
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    //login login if user logged in
    //show default page

    //if not then show login page
    //for now showing default page
    if (user.length > 0){
        res.render("index");
        // get data from database and show default page
    }else{
    // show login page
    }

});

router.post("/", function(req, res) {
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

router.get("/user/:id", function(req, res) {
  var userID = req.params.id;
  console.log(userID);


orm.myCourses("ankita", function(){
  console.log(res);
});

courses.all(function(data) {
var object = {
  courses: data
}
console.log(object);
});

  //will grab user info from database after new user creates account or user signs in 
  //below code will need to be adjusted and will query all user courses to show on user page 
  // connection.query("UPDATE `tasks` SET ? WHERE id = " + updateID,
  //   {task: request.body.task},
  //   (err, results) => {
  //     if (err) 
  //       throw err;
  // res.render("index", );
    }
  )
router.post("/user", function(req, res) {
//this will correspond to submit button for new course. Page needs to redirect to itself to update itself.
});

router.get("/user/allcourses", function(req, res) {
//when user clicks on tab, call query with all courses associated with that user 

});



module.exports = router;


