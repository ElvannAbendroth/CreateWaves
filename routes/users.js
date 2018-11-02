var express = require('express');
var router = express.Router();

var UserInterface = require('../models/userInterface');
var DatabaseConnection = require('../models/databaseConnection');

var connection = new DatabaseConnection("35.237.104.129", "Webapp", process.env.MYSQL_PASSWORD, "CreateWaves");
var userInterface = new UserInterface(connection);

/* GET users listing. */
router.get('/', function(req, res, next) {

  userInterface.listUsers(
    (result) => res.send(JSON.stringify(result)),
    (error) => res.status(400).send('Error inserting user: ' + err)
  );

});

module.exports = router;
