var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.findAll().then((users) => {
    res.send(users);
  });

});

module.exports = router;
