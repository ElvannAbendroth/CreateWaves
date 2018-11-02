var express = require('express');
var templateEngine = require('../models/templateEngine');
var fs = require('fs');
var path = require('path');

var router = express.Router();

/*new templateEngine(templateString, pageUrl, title, meta, content)*/

/* GET home page. */
router.get('/', function(req, res, next) {
  const title = "CreateWaves"
  const meta = fs.readFileSync(path.join(__dirname, '../views/meta.html'), "utf8");
  const url = '/';
  const content = '';
  
  const metaTemplate = templateEngine(meta, '/', title, '', '');

  const template = fs.readFileSync(path.join(__dirname, '../views/index.html'), "utf8");
  const result = templateEngine(template, '/', title, metaTemplate, '');
  res.send(result);
});
module.exports = router;

/* GET login page. */
router.get('/login', function(req, res, next) {
  const title = "CreateWaves"
  const meta = fs.readFileSync(path.join(__dirname, '../views/meta.html'), "utf8");
  const url = '/';
  const content = '';
  
  const metaTemplate = templateEngine(meta, '/', title, '', '');

  const template = fs.readFileSync(path.join(__dirname, '../views/login.html'), "utf8");
  const result = templateEngine(template, '/', title, metaTemplate, '');
  res.send(result);
});
module.exports = router;