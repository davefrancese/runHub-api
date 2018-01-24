var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose')
var assert = require('assert');
var race = require('../models/events');
var allRaces = require('../races.json')
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RunHub API' });
});

const url = process.env.PROD_MONGODB || 'mongodb://localhost:27017/'

router.get('/runhub', (req, res, next) => {
  var collection = 'events'
  mongo.connect(url, (err, client) => {
    if(err) {
      console.log(err);
    } else {
      console.log('CONNECTED!!!!');
      var collection = client.db('runhub').collection('events')
      collection.find({}).toArray((err, result) => {
        if(err) {
          res.send(err)
        } else if (result.length) {
          res.send(result)
        } else {
          res.send('No Results')
        }
      })
    }
  })
})

router.get('/runhub/seed', (req, res, next) => {
  var collection = 'events'
  mongo.connect(url, (err, client) => {
    if(err) {
      console.log(err);
    } else {
      console.log('CONNECTED!!!!');
      var collection = client.db('runhub').collection('events')
      collection.insertMany(allRaces)
      .then(result => {
        if(result.writeError) {
          res.send(result.writeError)
        } else if (result) {
          res.send(result)
        } else {
          res.send('No Results')
        }
      })
    }
  })
})


module.exports = router;
