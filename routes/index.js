//Required variables
var express = require('express');
var router = express.Router();

//Data to respond with
var jsonResponse = require('../data/stub.json')

//Logic to route
router.get('/', function(req, res, next) {
    res.json(jsonResponse)
});

module.exports = router;