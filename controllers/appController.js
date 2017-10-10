var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var song = require("../models/users.js");
//hardcodeing it for testing
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
module.exports = router;
// 