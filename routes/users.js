var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* POST register */
router.post('/register', function(req, res, next) {
  //router.post catches the post request on the page
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

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.findAll().then((users) => {
    res.send(users);
  });

});

module.exports = router;
