// Import the ORM to create functions that will interact with the database.
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");
var DataTypes = require('sequelize/lib/data-types'); //Defines 'DataTypes'

//=====================================
//--------------Constructors-----------
//=====================================

const User = sequelize.define('user', {
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

const Course = sequelize.define('course', {
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

const UsersToCourse = sequelize.define('users_to_course', {
  signups: {
    type: Sequelize.INTEGER(11),
    unique: true,
    allowNull: false,
    primaryKey: true, autoIncrement: true
  },
  userid: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  courseid: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  inprogress: {
    type: Sequelize.BOOLEAN(),
    defaultValue: false
  },
  status: DataTypes.STRING
});


User.belongsToMany(Course, { through: UsersToCourse });
Course.belongsToMany(User, { through: UsersToCourse });

//=========================================
//--------------Create Tables--------------
//=========================================


//*****************Queries for User******************

sequelize.sync({force: true}).then( function() {
  // Table created
  return User.create({
      userid: 'tara',
      name: 'tara',
      password: 'tara',
  });
});

sequelize.sync({force: true}).then( function() {
  // Table created
  return Course.create({
      name: 'html5',
      description: 'entry level course'
  });
});

sequelize.sync({force: true}).then( function() {
  return UsersToCourse.create({
    userid: User.userid, 
    courseid: Course.courseid
  });
});


/*
sequelize.sync().then(function () {

  User.findAll().then(function(users) {
      console.log("*********THIS IS THE USER LENGTH*************", users.length);
  });

});*/