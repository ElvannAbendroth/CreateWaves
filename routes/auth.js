var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.post('/login', function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(400).send('Email or password missing');
    }

    User.findOne({
        where: {
            email,
            password
        }
    }).then(result => {
        if (result) {
            const user = result.dataValues;

            req.session.user = user;

            res.send('Hello ' + user.username);
        } else {
            res.status(401).send('User and password combination incorrect');
        }
    })

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