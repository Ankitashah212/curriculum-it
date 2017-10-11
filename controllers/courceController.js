var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
//var song = require("../cource/song.js");
var Course = require("../models/course.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  song.all(function(data) {
    var hbsObject = {
      songs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// TODO make this endpoint work!
router.post("/api/songs", function(req, res) {
  song.create([
    "name", "listened"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// TODO make this endpoint work!
router.post("/api/songs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  song.update({
    listened: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
