const Sequelize = require('sequelize'); // Capital Sequelize var contains reference to library
const sequelize = require('./sequelizeConnection'); // small case sequelize var contains reference to our sequelize instance

const User = sequelize.define(
    'users', // first param of define: name of db table
    { // second param of define: object with information about the columns of the db table
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
    },
    { // third (optional) param of define: miscellaneous config about the db table
        timestamps: false
    }
);

module.exports = User;