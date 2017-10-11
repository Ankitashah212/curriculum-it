// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  myCources: function (userid, cb) {
    var queryString = "select c.name from users u, course c, users_to_course s where"
      + "(u.userid = s.userid) and (c.courceid = s.courceid) and 
      + "(s.userid = '" + userid + "')";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  addCource: function (courceid, userid, cb) {
    var queryString = "INSERT INTO users_to_course (userid, courceid) values ("
    +"'" + userid +"', "+ courceid + ")";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  deleteCource: function (id, cb) {
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
  updateCource: function (id, cb) {
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
  allCource: function ( cb) {
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
