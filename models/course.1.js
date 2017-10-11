// Import the ORM to create functions that will interact with the database.

//const User = require("./users.js");


//****************Course Contructor*****************

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

Course.sync();

module.exports = Course;



//THIS IS ALL THAT SHOULD BE IN THIS FILE. EVERYTHING ELSE HAS BEEN COMMENTED OUT. 
//TO BE DELETED UPON WORKING APP



















//*****************Queries for Course******************

//-----Create a new course-----

/*sequelize.sync({force: true}).then( function() {
  // Table created
  return Course.create({
      name: 'html5',
      description: 'entry level course'
  }, {
    name: 'css3',
    description: "entry level course on css"
  });
});

//-----Find all courses related to a certain user----

sequelize.sync().then(function () {
  
    Course.findAll().then(function(courses) {
        console.log("*********THESE ARE THE COURSE ATTRIBUTES*************", attributes['name', 'description']);
    });
  
  });
*/

/*
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



  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/


// Export the database functions for the controller (catsController.js).
