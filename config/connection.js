var Sequelize = require("sequelize");
//const mysql2 = require("mysql2"); 

//Setting up the config
//var connection;

var sequelize= new Sequelize('curriculum_db', 'root', "", {
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