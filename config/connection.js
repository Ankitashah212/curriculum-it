<<<<<<< HEAD
// Set up MySQL connection.
require("Sequelize");

var connection;

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

  
});


/*
if (process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password", //put your password here
    database: "curriculum_db"
  });
}
*/
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
=======
var Sequelize = require("sequelize");
const mysql2 = require("mysql2");

//Setting up the config
//var connection;

var sequelize= new Sequelize('curriculum_db', 'root', 'root', {
   host: "localhost",
   port: 3306,
   dialect: 'mysql'
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
>>>>>>> 4b07b1634f14c251a2714ebf6f9aacd7fad30cb9
