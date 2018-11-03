const Sequelize = require('sequelize');

module.exports = new Sequelize('CreateWaves', 'Webapp', process.env.MYSQL_PASSWORD, {
  host: '35.237.104.129',
  dialect: 'mysql',
});

