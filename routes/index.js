var express = require('express');
var templateEngine = require('../models/templateEngine');
var fs = require('fs');
var path = require('path');

var router = express.Router();

/* templateEngine(templateString, pageUrl, title, meta, content)*/

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

/* GET login page. */
router.get('/register', function(req, res, next) {
  const title = "CreateWaves"
  const meta = fs.readFileSync(path.join(__dirname, '../views/meta.html'), "utf8");
  const url = '/';
  const content = '';

  const metaTemplate = templateEngine(meta, '/', title, '', '');

  const template = fs.readFileSync(path.join(__dirname, '../views/register.html'), "utf8");
  const result = templateEngine(template, '/', title, metaTemplate, '');
  res.send(result);
});

module.exports = router;