// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var user = {
    myCourses: function (userid, cb) {
        orm.myCourses(userid, function (res) {
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
    deleteCource: function (id, cb) {
        deleteCource.update(id, function (res) {
            cb(res);
        });
    },
    allCource: function (id, cb) {
        allCource.update(function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (snacksController.js).
module.exports = user;
