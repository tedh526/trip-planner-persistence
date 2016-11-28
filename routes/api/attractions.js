const router = require('express').Router();
const Promise = require('bluebird');
const db = require('../../models');
const Hotel = db.model('hotel');
const Activity = db.model('activity');
const Restaurant = db.model('restaurant');

router.get('/api/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(function(hotels) {
    res.json(hotels);
  })
})

router.get('/api/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(function(restaurants) {
    res.json(restaurants);
  })
})

router.get('/api/activities', function(req, res, next) {
  Activity.findAll()
  .then(function(activities) {
    res.json(activities);
  })
})


module.exports = router;