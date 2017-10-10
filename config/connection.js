var Sequelize = require("sequelize");

//Setting up the config
var connection;

var sequelize = new Sequelize('ice_creamdb', 'root', 'password', {
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

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

module.exports("sequelize");

/*const mysql2 = require("mysql2");
const Sequelize = require('sequelize');
var con = require("./connection.js");

const User = connection.define('user', {
  userid: {
      type: Sequelize.STRING(50),
      unique: true,
      allowNull: false,
      primaryKey: true
  },
  name: {
      type: Sequelize.STRING(50),
  },
  password: {
      type: Sequelize.STRING(15),
      allowNull: false        
  }
});


const Course = connection.define('course', {
  courseid: {
      type: Sequelize.INTEGER(11),
      unique: true,
      allowNull: false,
      primaryKey: true, autoIncrement: true
  },
  name: {
      type: Sequelize.STRING(50),
  },
  description: {
      type: Sequelize.STRING(150),        
  }
});



User.sync({force: true}).then( function() {
  // Table created
  return User.create({
      userid: 'tara',
      name: 'tara',
      password: 'tara',
  });
});

Course.sync({force: true}).then( function() {
  // Table created
  return Course.create({
      name: 'html5',
      description: 'entry level course'
  });
});

connection.sync(User).then(function () {

  User.findAll().then(function(users) {
      console.log(users.length);
  });

});


  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });*/