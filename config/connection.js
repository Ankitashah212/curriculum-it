// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
<<<<<<< HEAD
    password: "",
=======
    password: "password",
>>>>>>> 7c53fa48f9f4728e8868176f8329af8fe7a6682f
    database: "curriculum_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
<<<<<<< HEAD
module.exports = connection;
=======
module.exports = connection;

>>>>>>> 7c53fa48f9f4728e8868176f8329af8fe7a6682f
