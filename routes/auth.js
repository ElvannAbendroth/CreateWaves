var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/register', function(req, res, next) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password || !username) {
        res.status(400).send('Missing email or password or username');
    }

    User.create({ username, email, password })
        .then(result => {
            res.send('user created!');
        })
        .catch(error => {
            res.status(400).send('Error occurred in creating user: ' + error);
        });
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