var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');

// create a sequelize instance with our local postgres database information.
var sequelize = new Sequelize('edc','root','PASSWORD',{
    host:'localhost',
    dialect: 'mysql',

    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

// setup User model and its fields.
var User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Role: {
        type: Sequelize.STRING,
        enum: ['member', 'company', 'owner', 'admin'],
        default: 'member'
    },
    verify: {
        type: Sequelize.INTEGER,
        default: 0
    }
}, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    }    
});

User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      }
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     username: 'sunil@gmail.com',
//     email: 'Hancock',
//     password:'hi'
//   });
// });
// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = User;