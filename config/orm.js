// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  myCourses: function (userid, cb) {
    var queryString = "select c.name , c.description from users u, course c, users_to_course s where"
      + "(u.userid = s.userid) and (c.courseid = s.courseid) and"
      + "(s.userid = '" + userid + "')";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  addCourse: function (courseid, userid, cb) {
    var queryString = "INSERT INTO users_to_course (userid, courseid) values ("
    +"'" + userid +"', "+ courseid + ")";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  deleteCourse: function (id, cb) {
    var queryString = "delete from users_to_course where signups = " + id;
  
    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateCourse: function (id, cb) {
    var queryString = " update users_to_course set inprogress = 1  where signups = " + id;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  allCourse: function ( cb) {
    var queryString = "select * from course ";

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
