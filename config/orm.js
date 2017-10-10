const mysql2 = require("mysql2");
const Sequelize = require('sequelize');
const connection = new Sequelize('curriculum_db', 'root', 'root', {
    dialect: 'mysql'
});

const User = connection.define('user', {
    userid: {
        type: Sequelize.STRING(50),
        unique: true,
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

User.sync({force: true}).then( function() {
    // Table created
    return User.create({
        userid: 'tara',
        name: 'tara',
        password: 'tara',
    });
});

  connection.sync(User).then(function () {

    User.findAll().then(function(users) {
        console.log(users.length);
    });

  });