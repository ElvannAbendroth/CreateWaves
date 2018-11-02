var express = require('express');
var router = express.Router();

var UserHandler = require('../models/userHandler');
var DatabaseConnection = require('../models/databaseConnection');

var connection = new DatabaseConnection("35.237.104.129", "Webapp", process.env.MYSQL_PASSWORD, "CreateWaves");

router.post('/register', function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(400).send('Missing email or password');
    }

    var handler = new UserHandler(connection, { email, password });
    handler.insert(
        (result) => res.send('user created!'),
        (error) => res.status(400).send('Error occurred in creating user: ' + error)
    );
});

router.post('/login', function(req, res, next) {
    res.send('hi from login');
    // expected to have: email, password
});

router.post('/logout', function(req, res, next) {
    res.send('hi from logout');
    //
});

router.post('/recover-password', function(req, res, next) {
    res.send('hi from recover');
    // expected to have: email
});

module.exports = router;