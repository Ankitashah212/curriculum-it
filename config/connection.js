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
