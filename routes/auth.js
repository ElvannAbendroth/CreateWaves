var express = require('express');
var router = express.Router();
var User = require('../models/user');



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