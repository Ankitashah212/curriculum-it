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
    password: "password",
    database: "snack_db"
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
module.exports = connection;


/*var Sequelize = require("sequelize");
//const mysql2 = require("mysql2"); DO NOT NEED, I THINK

//Setting up the config
//var connection;

var sequelize= new Sequelize('curriculum_db', 'root', "",{
   host: "localhost",
   dialect: 'mysql',

   pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
*/