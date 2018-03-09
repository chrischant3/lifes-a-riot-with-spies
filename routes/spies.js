//Required variables
var express = require('express');
var router = express.Router();
var sleep = require('sleep');
var responseWait = require('../config/responsetimes').routes.spies;

//Data to respond with
var jsonResponse = require('../data/spies.json')

//Logic to route
router.get('/', function(req, res, next) {
    sleep.msleep(responseWait);
    res.status(200).json(jsonResponse)
});

module.exports = router;