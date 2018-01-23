var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/test'

/* GET Events page. */
router.get('/', function(req, res, next) {
  res.send('hi')
});

module.exports = router;
