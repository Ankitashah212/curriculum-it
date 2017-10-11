// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var user = {
    myCourses: function (userid, cb) {
        orm.myCourses(userid, function (res) {
         // console.log(res);
            cb(res);
        });
    },
    addCourse: function (courseid, userid, cb) {
        orm.addCourse(courseid, userid, function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    updateCourse: function (id, cb) {
        orm.updateCourse(id, function (res) {
            cb(res);
        });
    },
    deleteCourse: function (id, cb) {
        deleteCourse.update(id, function (res) {
            cb(res);
        });
    },
    allCourse: function (id, cb) {
        allCourse.update(function (res) {
            cb(res);
        });
    },// add to cource and also sign up user for it in controller
    addToCource: function (name, desc, cb) {
      addToCource.update(function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (snacksController.js).
module.exports = user;
